import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  }

  const resetList = () => {
    setPeople(data);
  }

  return <>
    {
      people.map((person) => {
        const {id, name} = person;
        return <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)} className="btn">Remove</button>
        </div>
      })
    }
    <button onClick={resetList} className="btn">Reset</button>
  </>;
};

export default UseStateArray;
