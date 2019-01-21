import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/common/Header';
import List from './components/list/List';
import NotFound from './components/notFound/NotFound';
import Details from './components/details/Details';

import './index.css';

//Here, App is called as functional Component
const App = () => {
    let title = "React Application";
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={List}  exact />
                    <Route path="/currency/:id" component={Details}/>

                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
        
    /*
    Code before creating router
        <div>
                <Header/>
                <List/>
        </div> 
    */
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
