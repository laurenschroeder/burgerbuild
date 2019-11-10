import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons : [
    {name:'Max', age: 29},
    { name : 'Lauren', age: 27},
    {name: 'Manu', age: 29 }


    ],
    otherState: "something else"

  });

    const switchNameHandler = () => {
    //console.log('was clicked');
      setPersonsState({
        persons : [
        {name:'Maxmmm', age: 29},
        { name : 'Lauren', age: 27},
        {name: 'Manu', age: 28 }


      ]})

    }


 
  return (
    <div className="App">
      <h1>HI There</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} /> 
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} /> 

      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} /> 


    </div>
  );
//return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'HI There'));
 
}

export default App;

