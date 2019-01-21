import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';
const Loading = (props) => {
    let {width, height} = props;
    return <div className="Loading" style={{width, height}}/>;
}

Loading.defaultProps={
    widht:'28px',
    height: '28px'
};

Loading.propTypes={
    widht : PropTypes.string,
    height : PropTypes.string
};
export default Loading;