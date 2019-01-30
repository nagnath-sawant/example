import React from 'react';
import classes from './Cockpit.css';
import Auxiliry from '../../hoc/Auxiliary'
const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = classes.Button;

    if(props.persons.length <=2){
      assignedClasses.push(classes.red); // assignedClasses  = ['red']
    }

    if(props.persons.length <=1){
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    if(props.showPersons){
        btnClass = [classes.Button,classes.Red].join(' ');
    }


    return ( 
        // From React 16.2, we can use empty component instead of <Auxiliry>
        // <> .... </> ; it will do same thing as Auxiliry component does
        <Auxiliry>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Name</button>

            <button onClick={props.login}>Log in</button>
        </Auxiliry>
    );
}

export default React.memo(cockpit);