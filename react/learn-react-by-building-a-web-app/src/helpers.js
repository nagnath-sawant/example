import React from 'react';
/**
 * Fetch error helper
 * @param {Object} response 
 */
export const handleResponse = (response) => {
    return response.json().then( json => {
        return response.ok ? json: Promise.reject(json);
    });
}

/**
 * Render change percent helper
 * 
 * @param {string} percent
 * 
 * @returns JSX 
 */
export const renderChangePercent= (percent)=>{
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