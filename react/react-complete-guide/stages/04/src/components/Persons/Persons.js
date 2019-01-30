
import React from 'react';
import Person from './Person/Person'

class  Persons extends React.PureComponent{
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor:', props); 
    this.lastPersonRef = React.createRef();
   }
 
   componentWillMount(){
     console.log('[Persons.js] Inside the componentWillMount');
   }
 
   componentDidMount(){
     console.log(' [Persons.js] Inside the componentDidMount');
     this.lastPersonRef.current.focus();
   }

  componentWillReceiveProps(nextProps){
    console.log(' [Persons.js] Inside the componentWillReceiveProps', nextProps);
  }
/* 
  IMPLEMENTED in PureComponent by React
  shouldComponentUpdate(nextProps, nextState){
    console.log(' [Persons.js] Inside the shouldComponentUpdate', nextProps, " and ", nextState);
     return nextProps.persons != this.props.persons ||
     nextProps.showPersons  !== this.state.showPersons ||
     nextProps.clicked !== this.props.clicked;    
     //return true;
  } */

  componentWillUpdate(nextProps, nextState){
    console.log(' [Persons.js] Inside the componentWillUpdate', nextProps, " and ", nextState);
  }

  componentDidUpdate(){
    console.log('[Person] Inside the componentDidUpdate');
  }

  render(){
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person, index) => {
      return <Person 
        name = {person.name}
        age= {person.age}  
        key = {person.id}  
        position = {index}
        ref = {this.lastPersonRef}
        click = {() => this.props.clicked(index)}     
        changed = {(event) => this.props.changed(event, person.id)}      
      />
    })
    
  }
}

export default Persons;