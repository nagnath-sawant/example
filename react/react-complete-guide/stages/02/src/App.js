import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  // If state changes, it lead react to rerender DOM. i.e it calls render method again
  state = {
    persons :[
      { id : 'asdfasd', name:"Nagnath", age:28 },
      { id : 'adsfas', name:"Pavan", age:24 },
      { id : 'asdfas', name:"Omkar", age:23 }
    ],
    showPersons:false
  }

  // Never manulpulate state object direcly 
  nameChangedHandler = (event, id)=>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //let person = Object.assign({}, this.state.persons[personIndex]);    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    let persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) =>{
    //let persons = this.state.persons.slice()
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons : persons
    });

  }

  /**
   * if we define function like this, this keywork would be not avaliable under method body
   * Here, we are not binding switchNameHandler method with class App
   * switchNameHandler(){
   * }
   */

  togglePersonsHandler = () => {
    
    this.setState({
      showPersons : ! this.state.showPersons
    });

  }

  render() {
    // JSX
    // Using anonymous functio on event click can be inefficient, instead we should use Bind method 

    const style = {
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color : 'blue',
      backgroundColor: 'light-blue'
      
    };  

    let persons = null;
    
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) =>{
              return <Person 
                name = {person.name}
                age= {person.age}  
                click = {() => this.deletePersonHandler(index)}     
                key = {person.id}  
                changed = {(event) => this.nameChangedHandler(event, person.id)}       
              />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
      <h1>Hi, I am React!</h1>
      <p>This is really working!</p>
      <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Name</button>

      { persons}
      
      </div>
    );

      // Get compiled to this code
      // All these are not HTML tag, these are REACT tags
      // We have to use className instead of class, as class is reserved keyword in React
      // JSX must have at most one parent
    // return React.createElement('div', {className:'App'}, React.createElement("h1", null,"I\'am in react App."));
  }
}

export default App;
