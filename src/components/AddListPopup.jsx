import React from 'react';
import Popup from './Popup';

function AddListPopup({ isOpen, onClose, onSubmit }) {
  const [listName, setListName] = React.useState('');

  return (
    <Popup
      title="Add New List"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      required={false}>
      <label className="popup__form-field">
        <input
          type="text"
          className="popup__input popup__text"
          id="name-input"
          name="name"
          required
          minLength="2"
          maxLength="200"
          value={listName}
          placeholder="List name"
          onChange={(e) => {
            setListName(e.target.value);
          }}
        />
      </label>
    </Popup>
  );
}

export default AddListPopup;
