import React from 'react';

const ListItem = (props) => {
 return (
   <div className="card container-listItem">
    <img className="card-img-top listPicture" src={props.animal.picture}/>
    <div className="card-body">
    <div>{`Name: ${props.animal.name}`}</div>
    <div>{`Breed: ${props.animal.breed}`}</div>
    <div>{`Contact: ${props.animal.contact}`}</div>
    <button className="btn btn-outline-secondary" type="button" value="Remove" onClick={() => props.removeItem(props.animal.id)}>Remove</button>
    </div>
   </div>
 )
}

export default ListItem;