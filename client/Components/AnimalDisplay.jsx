import React from 'react';
import AnimalCard from './AnimalCard.jsx'

const AnimalDisplay = (props) => {
  const AnimalDisplayArray = [];
  for (let i = 0; i < props.animalList.length; i++) {
    AnimalDisplayArray.push(<AnimalCard key={i}/>)
  }
  return (
    <div className="animalDisplay">
      <h3>Available for Adoption</h3>
      {AnimalDisplayArray}
    </div>
  )
}

export default AnimalDisplay;

