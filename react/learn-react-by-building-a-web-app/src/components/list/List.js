import React from 'react';
import {handleResponse} from '../../helpers'
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import './Table.css';


class List extends React.Component{

    // ES 6 classes must call super if they are subclass and this keywork is un intilized if super is not called
    constructor(){
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null
        };
    }

// React lifecycle hook: number of methods in REACT that will be called 

componentDidMount(){
this.setState({loading: true});

    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
    .then(handleResponse)
    .then((data) => {
        //this.state.currencies = data.currencies; THIS is not correct way, in react we never modify state directly
      //console.log('Success', data);
      this.setState({currencies: data.currencies,
        loading:false});

    })
    .catch((error) => {
        this.setState({error: error.errorMessage,
            loading:false});
      //console.log('Error', error);
    });
    
    //.reject((error)=> console.log("Only when Network error!!!!!"));
}

renderChangePercent(percent){
    if(percent<0){
        return <span className="percent-fallen"> {percent}% &darr;</span>
    }
    else if(percent>0){
        return <span className="percent-raised">{percent}% &uarr;</span>
    }
    else {
        return <span>{percent}%</span>
    }
}
    render(){
        
        //const {loading, error, currencies}= this.state; and we can access all variables without using this.state; eg. this.state.error => error;
        
        console.log(this.state);

        // Render only loading component, if loading state is set to true
        if(this.state.loading){
            return <div className="loading-container"><Loading></Loading></div>
        }

        // Render only error message if error occured while fetching data
        if(this.state.error){
            return <div className="error">{this.state.error}</div>
        }

        return(
            <div className = "Table-container">

            <table className="Table">
                <thead className = "Table-head">
                <tr>
                    <th>Cryptocurrency</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24H Change</th>
                </tr>
                </thead>

                <tbody className="Table-body">
                {this.state.currencies.map((currency) =>(
                    <tr key={currency.id}>
                     <td>
                         <span className="Table-rank">{currency.rank}</span>
                         {currency.name}
                     </td>
                     <td>
                         <span className="Table-doller">$ {currency.price}</span> 
                     </td>
                     <td> 
                         <span className="Table-doller">$ {currency.marketCap}</span>
                    </td>

                    <td>
                        {this.renderChangePercent(currency.percentChange24h)}
                    </td>
                    </tr>
                ))}        
                </tbody>
                
            
            </table>

                
            </div>
        );
    }
}

export default List;