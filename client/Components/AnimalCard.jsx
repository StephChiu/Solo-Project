import React from 'react';

const AnimalCard = (props) => {
  <div className="animalCard">
    <h4>{`Name: ${props.animalList.name}`}</h4>
    <h4>{`Breed: ${props.animalList.breed}`}</h4>
    <h4>{`Gender: ${props.animalList.gender}`}</h4>
    <h4>{`Age: ${props.animalList.age}`}</h4>
    <input type="button" value="Add" onClick={() => props.addList(props.animalList.id)}/>
  </div>
}

export default AnimalCard;