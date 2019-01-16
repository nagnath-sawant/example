import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = (props) =>{
    const {page, totalPages, handlePaginationState} = props;

    return <div className="Pagination"> 
        <button 
            className="Pagination-button"
            onClick={()=>handlePaginationState('pre')}
            disabled = {page<=1}   
        >
            &larr;
        </button>
        
        <span className="Pagination-info">
            Page <b>{page}</b> of <b>{totalPages}</b> total pages.
        </span>
        
        <button
            className="Pagination-button"
            onClick = {() => handlePaginationState('next')}
            disabled = {page>=totalPages}
        >
            &rarr;
        </button>
    </div>
}

Pagination.propTypes = {
page : PropTypes.number.isRequired,
totalPages : PropTypes.number.isRequired,
handlePaginationState : PropTypes.func.isRequired
}

export default Pagination;