import React, { useState } from 'react';

import List from './List';
import Header from './Header';
import Footer from './Footer';
import listTitels from './utils/constansts';
import Popup from './Popup';
import AddListPopup from './AddListPopup';

function App() {
  const [isAddTaskPopupOpen, setIsAddTaskPopupOpen] = useState(false);
  const [isAddListPopupOpen, setIsAddListkPopupOpen] = useState(false);

  function handleTaskPopupOpen() {
    setIsAddTaskPopupOpen(true);
  }

  function handleListPopupOpen() {
    setIsAddListkPopupOpen(true);
  }
  function handlePopupClose() {
    setIsAddTaskPopupOpen(false);
    setIsAddListkPopupOpen(false);
  }
  return (
    <div className="main-page">
      <div className="main-page__container">
        <Header onOpenPopup={handleListPopupOpen} />
        <div className="body">
          {listTitels.map((i) => {
            return <List key={i} name={i} onOpenPopup={handleTaskPopupOpen} />;
          })}
        </div>
        <Footer />
      </div>
      <Popup
        title="Add Task"
        isOpen={isAddTaskPopupOpen}
        onClose={handlePopupClose}
        onSubmit
        required
      />
      <AddListPopup isOpen={isAddListPopupOpen} onClose={handlePopupClose} onSubmit />
    </div>
  );
}

export default App;
