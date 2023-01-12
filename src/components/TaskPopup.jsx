import React, { useState } from 'react';
import { useEscClose, useClickClose } from '../components/utils/UseClose';

function TaskPopup({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [description, setdDescription] = useState('');

  useEscClose(isOpen, onClose);

  useClickClose(isOpen, onClose, 'popup_opened');

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">Add Task</h2>
        <form className="popup__form" name="add-task-form" onSubmit={onSubmit}>
          <label className="popup__form-field">
            <input
              type="text"
              className="popup__input popup__text"
              id="name-input"
              name="name"
              required
              minLength="2"
              maxLength="200"
              value={name}
              placeholder="Task name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label className="popup__form-field">
            <input
              type="text"
              className="popup__input popup__text"
              id="description-input"
              name="description"
              required
              minLength="2"
              maxLength="1000"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setdDescription(e.target.value);
              }}
            />
          </label>
          <button type="submit" className="popup__save-button">
            Сохранить
          </button>
        </form>
        <button type="button" className="popup__close-button" onClick={onClose}></button>
      </div>
    </div>
  );
}
export default TaskPopup;
