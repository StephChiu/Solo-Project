import React from 'react';
import AnimalCard from './AnimalCard.jsx'

const AnimalDisplay = (props) => {
  const AnimalDisplayArray = [];
  for (let i = 0; i < props.animalList.length; i++) {
    AnimalDisplayArray.push(<AnimalCard id={props.animalList[i].id} key={i} name={props.animalList[i].name} breed={props.animalList[i].breed} pic={props.animalList[i].pic} contact={props.animalList[i].contact}/>)
  }
  return (
    <div className="animalDisplay">
      <h3 id="adoptionHeader">Available for Adoption</h3>
      {AnimalDisplayArray}
    </div>
  )
}

export default AnimalDisplay;

