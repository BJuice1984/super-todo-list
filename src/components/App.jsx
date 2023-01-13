import React, { useState } from 'react';

import List from './List';
import Header from './Header';
import Footer from './Footer';
import listTitels from './utils/constansts';
import TaskPopup from './TaskPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  function handlePopupOpen() {
    setIsPopupOpen(true);
  }
  function handlePopupClose() {
    setIsPopupOpen(false);
  }
  return (
    <div className="main-page">
      <div className="main-page__container">
        <Header />
        <div className="body">
          {listTitels.map((i) => {
            return <List key={i} name={i} onOpenPopup={handlePopupOpen} />;
          })}
        </div>
        <Footer />
      </div>
      <TaskPopup isOpen={isPopupOpen} onClose={handlePopupClose} onSubmit />
    </div>
  );
}

export default App;
