import React, { useState } from 'react';
import List from './List';
import Header from './Header';
import Footer from './Footer';
import AddListPopup from './AddListPopup';
import { useDispatch, useSelector } from 'react-redux';
import { addList, addTaskList } from '../redux/listSlice';
import AddTaskPopup from './AddTaskPopup';

function App() {
  const [isAddTaskPopupOpen, setIsAddTaskPopupOpen] = useState(false);
  const [isAddListPopupOpen, setIsAddListkPopupOpen] = useState(false);
  const [currentListName, setCurrentListName] = useState('');

  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  function handleAddNewList(listName) {
    dispatch(addList(listName));
    handlePopupClose();
  }

  function handleAddNewTask(task) {
    dispatch(addTaskList({ task, currentListName }));
    handlePopupClose();
  }

  function handleTaskPopupOpen(target) {
    setCurrentListName(target.parentElement.firstChild.textContent);
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
          {list.list.map((i, key) => {
            return <List key={key} list={i} onOpenPopup={handleTaskPopupOpen} />;
          })}
        </div>
        <Footer />
      </div>
      <AddTaskPopup
        isOpen={isAddTaskPopupOpen}
        onClose={handlePopupClose}
        onSubmit={handleAddNewTask}
      />
      <AddListPopup
        isOpen={isAddListPopupOpen}
        onClose={handlePopupClose}
        onSubmit={handleAddNewList}
      />
    </div>
  );
}

export default App;
