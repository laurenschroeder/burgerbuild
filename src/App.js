import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons : [
		{name:'Max', age: 29},
		{ name : 'Lauren', age: 27},
		{name: 'Manu', age: 29 }


		],
    otherState: "something else"

	}

  switchNameHandler = () => {
    //console.log('was clicked');
    this.setState({
      persons : [
      {name:'Maxmmm', age: 29},
      { name : 'Lauren', age: 27},
      {name: 'Manu', age: 28 }


    ]});

  }

 render() {
  return (
    <div className="App">
      <h1>HI There</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} /> 
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} /> 

      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> 


    </div>
  );
//return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'HI There'));
 }
}

export default App;
