import React from 'react';

const AnimalCard = (props) => {
  return (
  <div className="card container-animalCard ">
    <img className="picture" src={props.pic}/>
    <div className="card-body d-flex flex-column">
    <div>{`Name: ${props.name}`}</div>
    <div>{`Breed: ${props.breed}`}</div>
    <div>{`Contact: ${props.contact}`}</div>
    <button className="btn btn-secondary btn-sm mt-auto" value="Save" onClick={() => props.addItem(props.id, props.name, props.breed, props.pic, props.contact)}>Save</button>
    </div>
  </div>
  )
}

export default AnimalCard;