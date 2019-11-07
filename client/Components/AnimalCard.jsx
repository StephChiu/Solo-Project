import React from 'react';

const AnimalCard = (props) => {
  return (
  <div className="animalCard">
    <img className="picture" src={props.pic}/>
    <div>{`Name: ${props.name}`}</div>
    <div>{`Breed: ${props.breed}`}</div>
    <div>{`Contact: ${props.contact}`}</div>
    <input type="button" value="Save" onClick={() => props.addItem(props.id, props.name, props.breed, props.pic, props.contact)}/>
  </div>
  )
}

export default AnimalCard;