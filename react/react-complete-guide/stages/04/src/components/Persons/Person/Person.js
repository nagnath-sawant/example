import React, {Component } from 'react';
import { WithClass } from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App'
import classes from './Person.css';
// It is functional component (stateless) 
class Person  extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor:', props); 
        this.inputElement = React.createRef(); // 16.3
       }
     
       componentWillMount(){
         console.log('[Person.js] Inside the componentWillMount');
       }
     
       componentDidMount(){
         console.log(' [Person.js] Inside the componentDidMount');
         //this.focus();
       }
    
       focus(){
        if(this.props.position ===0){
          //this.inputElement.focus(); // Before React 16.3
          this.inputElement.current.focus();
         }

         this.inputElement.current.focus();
       }

    
      render(){
        console.log('[Person.js] Inside render');
        return <>
          <AuthContext.Consumer>
            {auth => auth ?<p> I'm authenticated!</p>:null}
          </AuthContext.Consumer>
          <p onClick = {this.props.click}>
            My name is {this.props.name} and I am {this.props.age} years old!
          </p>

          <p> {this.props.children}</p>
          
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
            //ref = { (input) => this.inputElement = input} // Before  React 16.3
            ref = {this.inputElement}
          />
          </>

    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, classes.Person);