import React from 'react';

function List({ name }) {
  return (
    <div className="list">
      <h2 className="list__title">{name}</h2>
    </div>
  );
}

export default List;
