  import React, { Component } from 'react';
  import classes from './App.css';
  import Persons from '../components/Persons/Persons';
  import Cockpit from '../components/cockpit/Cockpit'
  import WithClass from '../hoc/WithClass';


  export const AuthContext = React.createContext(false);

  class App extends Component {
    constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor:', props); 

      // If state changes, it lead react to rerender DOM. i.e it calls render method again
      this.state = {
        persons :[
          { id : 'asdfasd', name:"Nagnath", age:28 },
          { id : 'adsfas', name:"Pavan", age:24 },
          { id : 'asdfas', name:"Omkar", age:23 }
        ],
        showPersons:false,
        toggleClicked : 0,
        authenticated: false
      }
    }

    componentWillMount(){
      console.log('[App.js] Inside the componentWillMount');
    }

    componentDidMount(){
      console.log(' [App.js] Inside the componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log(' [App.js] Inside the shouldComponentUpdate', nextProps, " and ", nextState);
      return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons ||
      nextState.authenticated !== this.state.authenticated;
      //return true;
    }

    componentWillUpdate(nextProps, nextState){
      console.log(' [App.js] Inside the componentWillUpdate', nextProps, " and ", nextState);
    }

    static getDerivedStateFromProps(nextProps, prevState){
      console.log(' [App.js] Inside the getDerivedStateFromProps', nextProps, "and prevState ", prevState);
      //return state which is depnds on nextProps
      return prevState;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log(' [App.js] Inside the getSnapshotBeforeUpdate', prevProps, "and prevState ", prevState);
    }

    componentDidUpdate(){
      console.log('[App.js] Inside the componentDidUpdate');
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
     * if we define function like this, this keyword would be not avaliable under method body
     * Here, we are not binding switchNameHandler method with class App
     * switchNameHandler(){
     * }
     */

     // Correct way to update state which is dependent on previous state
    togglePersonsHandler = () => {
      /*     this.setState({
        showPersons : ! this.state.showPersons
      }); */

      let doesShow = this.state.showPersons;
      this.setState((prevState, props) =>{
        return {
          showPersons : !doesShow,
          toggleClicked : prevState.toggleClicked + 1
        }
      });
    }

    loginHandler = () => {
      this.setState({authenticated : true});
    }

    render() {
      // JSX
      // Using anonymous functio on event click can be inefficient, instead we should use Bind method   

      console.log('[App.js] Inside render');
      let persons = null;
      
      if(this.state.showPersons){
        persons = (
              <Persons 
                persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler}
              />
        );
      }

      return (
        <WithClass classes={classes.App}>
          <button onClick={() => { this.setState({showPersons:true})}}> Show Persons</button>
          <Cockpit 
            appTitle = {this.props.appTitle}
            showPersons={this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler}
            login = {this.loginHandler}
          />

          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
          
        </WithClass>
      );

        // Get compiled to this code
        // All these are not HTML tag, these are REACT tags
        // We have to use className instead of class, as class is reserved keyword in React
        // JSX must have at most one parent
      // return React.createElement('div', {className:'App'}, React.createElement("h1", null,"I\'am in react App."));
    }
  }

  export default App;
