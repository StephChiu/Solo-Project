import React, { Component } from 'react';
import ListItem from './ListItem.jsx';

import '../stylesheets/styles.css';

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      savedList: []
    }
  }

  getData() {
    fetch('/db/getData')
    .then(response => response.json())
    .then(data => {
      this.setState({ savedList: data })
    })
  }

  removeItem(id) {
    const body = {
      id: id
    }
    fetch('/db/removeItem', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() { 
    this.getData();
    const listArray = [];
    for (let i = 0; i < this.state.savedList.length; i +=1 ) {
      listArray.push(<ListItem key={i} animal={this.state.savedList[i]} removeItem={this.removeItem}/>)
    }
    return ( 
      <div className="container-list">
        <h3 id="listHeader">Potential FurBabies</h3>
        {listArray}
      </div>
     );
  }
}
 
export default List;
