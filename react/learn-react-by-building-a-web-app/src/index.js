import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import List from './components/list/List'

import './index.css';

//Here, App is called as functional Component
const App = () => {
    let title = "React Application";
    return (
    <div>
        <Header/>

        <List/>
    </div>
    );
}
// We can define component using ES6 class, ex


ReactDOM.render(<App></App>,
    document.getElementById('root')
    );

/* class App2 extends React.Component{
        render(){
            return <h2> React component using class!</h2>;
        }
}
ReactDOM.render(<App2></App2>,document.getElementById('root')); */
