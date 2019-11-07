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
      type: 'dog',
      size: 'small',
      gender: 'male',
      age: 'baby'
     };

     this.typeChange = this.typeChange.bind(this);
     this.sizeChange = this.sizeChange.bind(this);
     this.genderChange = this.genderChange.bind(this);
     this.ageChange = this.ageChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.addItem = this.addItem.bind(this);
  }

  typeChange(event) {
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
    // console.log(this.state);
    event.preventDefault();
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({
        "type": this.state.type,
        "size": this.state.size,
        "gender": this.state.gender,
        "age": this.state.age
      }),
      headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data.animals)
      let array = data.animals;
      let newArray = []
      for (let i = 0; i < array.length; i +=1 ) {
        let obj = {};
        obj.id = array[i].id
        obj.name = array[i].name;
        obj.breed = array[i].breeds.primary;
        if (array[i].photos.length > 0) {
          obj.pic = array[i].photos[0].medium;
        } else {
          obj.pic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNACAnUruTnvmmxnaKBZ852q4P8r61Dc3BBlB3H3PGuNUWi7sk&s'
        } 
        obj.contact = array[i].contact.email;
        newArray.push(obj);
      }
      this.setState({ animalList: newArray});
    });
  }

  addItem(id, name, breed, pic, contact) {
    const body = {
      id: id,
      name: name,
      breed: breed,
      pic: pic,
      contact: contact
    }
    fetch('/db/saveItem', {
      method: 'post', 
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      console.log('data returned to front-end --->', data)
    })
  }

  render() { 
    return ( 
      <div className="container"> 
        <Form type={this.state.type} typeChange={this.typeChange} size={this.state.size} sizeChange={this.sizeChange} gender={this.state.gender} genderChange={this.genderChange} age={this.state.age} ageChange={this.ageChange} handleSubmit={this.handleSubmit}/>
        <AnimalDisplay animalList={this.state.animalList} addItem={this.addItem}/>
        <List/>
      </div>
     );
  }
}
 
export default App;