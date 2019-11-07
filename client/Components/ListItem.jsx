import React from 'react';

const ListItem = (props) => {
 return (
   <div className="listItem">
    <img className="listPicture" src={props.animal.picture}/>
    <div>{`Name: ${props.animal.name}`}</div>
    <div>{`Breed: ${props.animal.breed}`}</div>
    <div>{`Contact: ${props.animal.contact}`}</div>
    <input type="button" value="Remove" onClick={() => props.removeItem(props.animal.id)}/>
   </div>
 )
}

export default ListItem;