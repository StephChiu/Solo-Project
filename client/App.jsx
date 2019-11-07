import React, { Component } from 'react';

import Form from './Components/Form.jsx';
import AnimalDisplay from './Components/AnimalDisplay.jsx';
import List from './Components/List.jsx';
import './stylesheets/styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      animalList: [],
      type: '',
      size: '',
      gender: '',
      age: '',
      fetched: false,
     };

     this.typeChange = this.typeChange.bind(this);
     this.sizeChange = this.sizeChange.bind(this);
     this.genderChange = this.genderChange.bind(this);
     this.ageChange = this.ageChange.bind(this);
  }

  typeChange(event) {
    console.log('inside TypeChange');
    this.setState({ type: event.target.value })
  }

  sizeChange(event) {
    this.setState({ size: event.target.value })
  }

  genderChange(event) {
    this.setState({ gender: event.target.value })
  }

  ageChange(event) {
    this.setState({ age: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('button press');
    fetch('/api')
    .then(response => console.log(response));
  }

  render() { 
    return ( 
      <div className="container"> 
        <Form type={this.state.type} typeChange={this.typeChange} size={this.state.size} sizeChange={this.sizeChange} gender={this.state.gender} genderChange={this.genderChange} age={this.state.age} ageChange={this.ageChange} handeSubmit={this.handleSubmit}/>
        <AnimalDisplay animalList={this.state.animalList}/>
        <List animalList={this.state.animalList}/>
      </div>
     );
  }
}
 
export default App;