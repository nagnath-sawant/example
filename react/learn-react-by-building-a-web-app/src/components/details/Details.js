import React from 'react';
import {API_URL} from './../../config';
import {handleResponse, renderChangePercent} from '../../helpers';
import Loading from '../common/Loading';

import './Details.css'

class Details extends React.Component{

    constructor(){
        super();
        this.state={
            currency: {},
            loading: false,
            error: null
        };
    }
    componentDidMount(){
       console.log(this.props); 
       const currencyId = this.props.match.params.id; 
       this.fetchDetails(currencyId);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.id !== nextProps.match.params.id)
        this.fetchDetails(nextProps.match.params.id);
    }

    fetchDetails(currencyId){
       this.setState({loading:true});
       fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
       .then(handleResponse)
       .then((currency)=>{
           console.log('Currency', currency);
           this.setState({
               currency:currency,
               loading: false,
               error:null
           });
       })
       .catch( (error) => {
           this.setState({
               loading:false,
               error: error.errorMessage
           });
           console.log('error', error);
       });
    }

    render(){
        const {loading, error, currency} = this.state;
        
        //Render only loading component if loading state is set to true
        if(loading){
            return <div className="Loading-container"><Loading/></div>
        }

        if(error){
            return <div className="error">{error}</div>
        }
        return(
            <div className="Details">
               <h1 className="Details-heading">
                       {currency.name} ({currency.symbol})
               </h1>
               <div className="Detail-container">
                   <div className="Detail-item">
                     Price <span className="Detail-value">$ {currency.price}</span>  
                   </div>

                   <div className="Detail-item">
                     Rank <span className="Detail-value">{currency.rank}</span>  
                   </div>

                   <div className="Detail-item">
                     24H Change <span className="Detail-value">{renderChangePercent(currency.percentChange24h)}</span>  
                   </div>

                   <div className="Detail-item">
                     <span className="Detail-title">Market Cap</span>  
                     <span className="Detail-doller">$</span> 
                     {currency.marketCap} 
                   </div>

                   <div className="Detail-item">
                     <span className="Detail-title">24H Volume</span>  
                     <span className="Detail-doller">$</span> 
                     {currency.volume24h}
                   </div>

                   <div className="Detail-item">
                     <span className="Detail-title">Total Supply</span>  
                     {currency.totalSupply}
                   </div>
               </div>
            </div>
        );
    }
}

export default Details;
