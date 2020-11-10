//import React, { useEffect } from 'react';
import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const Cockpit = props => {
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   setTimeout(() => {
  //     alert('Saved data to cloud!');
  //   }, 1000);
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in useEffect');
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('[Cockpit.js] 2nd useEffect');
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in 2nd useEffect');
  //   };
  // });

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={classes.button}
        onClick={props.clicked}>Toggle Persons</button>
    </Aux>
  );
};

export default Cockpit;

//export default React.memo(Cockpit);
