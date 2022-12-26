import React from 'react';

function List({ name }) {
  return (
    <div className="list">
      <h2 className="list__title">{name}</h2>
      <p className="list__text">Task text</p>
      <button className="list__button">Add Task</button>
    </div>
  );
}

export default List;
