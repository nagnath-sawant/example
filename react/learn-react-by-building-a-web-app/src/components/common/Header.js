import React from 'react';

import './Header.css'
import logo from './logo.png'

const ContainerStyle = {
    fontSize : '40px'
};
// Component Defined as class; We need to override render() method
// class Header extends React.Component{
//     render(){
        
//         return <div style={ContainerStyle} className="Header"> Header</div>
//     }
// }


// Component defined as a function
const Header = () => {
    return (
        <div className="Header">
        <img src={logo} alt="logo" className="Header-logo"></img>
        </div>
    );
}
export default Header;