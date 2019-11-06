import React from 'react';

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <h3>Filter</h3>
      <label>
      Type:
        <select value={props.type} onChange={props.typeChange}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="bird">Bird</option>
        </select>
      </label>
      <label>
      Size:
        <select value={props.size} onChange={props.sizeChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xlarge">XLarge</option>
        </select>
      </label>
      <label>
      Gender:
        <select value={props.gender} onChange={props.genderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
      Age:
        <select value={props.age} onChange={props.ageChange}>
          <option value="baby">Baby</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
      </label>
      <input type="submit" value="Search"/>
    </form>
  )
};

export default Form;