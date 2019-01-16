import React from 'react';
import {handleResponse} from '../../helpers'
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';


class List extends React.Component{

    // ES 6 classes must call super if they are subclass and this keywork is un intilized if super is not called
    constructor(){
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page : 1
        };

        // To allow this access inside this method
        this.handlePaginationState = this.handlePaginationState.bind(this);
    }

// React lifecycle hook: number of methods in REACT that will be called 

componentDidMount(){
    this.fetchCurrencies();
}

fetchCurrencies(){
    this.setState({loading: true});
    const {page} = this.state;

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
    .then(handleResponse)
    .then((data) => {
        //this.state.currencies = data.currencies; THIS is not correct way, in react we never modify state directly
      //console.log('Success', data);
      this.setState({
          currencies: data.currencies,
          loading:false,
          totalPages : data.totalPages
    });

    })
    .catch((error) => {
        this.setState({error: error.errorMessage,
            loading:false});
      //console.log('Error', error);
    });    
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

//handlePaginationState = () =>{}
handlePaginationState(direction){
    let nextPage = this.state.page;

    // Increment next page if direction variable is next, otherwise decrement it
    nextPage = direction === 'next' ? nextPage + 1 : nextPage;

    this.setState({ page : nextPage }, () => { 
        //Call fetchCurrencies function inside set state's callback 
        // because we have to make sure first page state is updated
        this.fetchCurrencies();
        });
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
            <div>
                <Table 
                    currencies = {this.state.currencies} 
                    renderChangePercent = {this.renderChangePercent}
                />

                <Pagination
                    page = {this.state.page}
                    totalPages = {this.state.totalPages}
                    handlePaginationState = {this.handlePaginationState}
                />
            </div>
        );
    }
}

export default List;