import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass ='';

    if(props.persons.length <=2){
      assignedClasses.push(classes.red); // assignedClasses  = ['red']
    }

    if(props.persons.length <=1){
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    if(props.showPersons){
        btnClass = classes.Red;
    }


    return ( 
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Name</button>
        </div>
    );
}

export default cockpit;