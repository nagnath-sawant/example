import React from 'react';
import {API_URL} from '../../config';
import Loading from '../common/Loading';
import {withRouter} from 'react-router-dom';
import {handleResponse} from '../../helpers';

import './Search.css';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            searchResults : [],
            searchQuery : '',
            loading: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRedirect  = this.handleRedirect.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        // console.log(this.searchQuery.value);
        // console.log(this.firstName.value);

        console.log(this.state);
    }

    handleChange(event){
        console.log(event.target.value);
        let searchQuery = event.target.value;
        
        this.setState({searchQuery});
        
        console.log(this.state);

        // If search query is not present, dont send request to server
        if(!searchQuery){
            return '';
        }

        this.setState({ loading:true });

        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
        .then(handleResponse)
        .then((result)=>{
            console.log(result);
            this.setState({
                loading:false,
                searchResults : result
            });
        });


        // if(inputName === "searchQuery"){
        //     this.setState({
        //         searchQuery:searchQuery
        //     });
        // }else if(inputName === "firstName"){
        //     this.setState({
        //         firstName : searchQuery
        //     });
        // }
    }

    handleRedirect(currencyId){
        //Clear input value and close autocomplete container
        // By clearing searchQuery state
        this.setState({
            searchQuery : '',
            searchResults : [],
        });


        this.props.history.push(`/currency/${currencyId}`);
    }

    renderSearchResult(){
        let {searchResults, searchQuery, loading} = this.state;

        if(!searchQuery){
            return '';
        }
        if(searchResults.length >0)
        {
            return(
                <div className="Search-result-container">
                    {searchResults.map(result => {
                    return <div 
                            key={result.id}
                            className ="Search-result"
                            onClick = {() => this.handleRedirect(result.id)}
                        >
                            {result.name} ({result.symbol})

                        </div>
                    })}
                </div>
            );
        }else{
            if(!loading){
                return <div className="Search-result-container">
                        <div className="Search-no-result">
                            No result found.
                        </div>
                
                </div>
            }
        }
    }
    render(){

        let {loading,searchQuery} = this.state;
        console.log(" this.state.searchResults ", this.state.searchResults)
        //<input name="searchQuery"/> this will send input as query param
        return(
            // <form>
            <div className="Search"> 
                {/* <input ref={(input)=>this.searchQuery = input}/> */}
                {/* <input ref={(input) => this.firstName=input}/> */}
                <span className="Search-icon"/>
                <input 
                    className="Search-input"
                    type="text"
                    placeholder="Currency name"
                    onChange={this.handleChange}
                    value ={searchQuery}
                />

                { loading &&
                    <div className="Search-loading">
                        <Loading
                            width="12px"
                            height="12px"
                        />
                    </div>
                }
            {this.renderSearchResult()}

            </div>
            // </form>
        );
    }
}

export default withRouter(Search);