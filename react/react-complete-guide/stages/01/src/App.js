import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  // If state changes, it lead react to rerender DOM. i.e it calls render method again
  state = {
    persons :[
      { name:"Nagnath", age:28 },
      { name:"Pavan", age:24 },
      { name:"Omkar", age:23 }
    ]
  }

  switchNameHandler = (newName) => {
    // We can not modify state directly
    //this.state.persons[0].name="Nagnath Sawant"

    this.setState({
      persons: [
        { name: newName, age:28 },
        { name:"Pavan kumar", age:24 },
        { name:"Omkar Yadav", age:23 }
      ]
    });

  }

  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        { name: "Nagnath", age:28 },
        { name: event.target.value, age:24 },
        { name:"Omkar Yadav", age:23 }
      ]
    });
  }

  /**
   * if we define function like this, this keywork would be not avaliable under method body
   * Here, we are not binding switchNameHandler method with class App
   * switchNameHandler(){
   * }
   */

  render() {
    // JSX
    // Using anonymous functio on event click can be inefficient, instead we should use Bind method 

    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color : 'blue',
      backgroundColor: 'light-blue'
      
    };  

    return (
      <div className="App">
      <h1>Hi, I am React!</h1>
      <p>This is really working!</p>
      <button
        style={style}
        onClick={() => this.switchNameHandler("Nags")}>Switch Name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />

      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed = {this.nameChangedHandler}
        //click={this.switchNameHandler.bind(this, "Pavs")}

        >
          My hobbies are: Photography and ...
      </Person>

      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
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
