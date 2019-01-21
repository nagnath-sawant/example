import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

const NotFount = () =>{
    return(
        <div className="NotFound">
            <h1 className="NotFound-title">Opps!! Page not found</h1>

            <Link to="/" className="NotFound-link">Go to homepage</Link>
        </div>
    );
}

export default NotFount;