import React from 'react';

function List({ list, onOpenPopup }) {
  return (
    <div className="list">
      <h2 className="list__title">{list.name}</h2>
      {list.taskList
        ? list.taskList.map((task, key) => (
            <p className="list__text" key={key}>
              {task}
            </p>
          ))
        : ''}
      <button className="list__button" onClick={(e) => onOpenPopup(e.target)}>
        Add Task
      </button>
    </div>
  );
}

export default List;
