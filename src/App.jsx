import Addheader from './components/Addheader';
import AddToDo from './components/AddTodo';

import './App.css';
import TodoItems from './components/TodoItems';
import { useState } from 'react';
import WelcomeMsg from './components/WelcomeMsg';
function App() {
  const initialTodoItems = [
    {
      name: 'Buy Milk',
      dueDate: '16/09/25',
    },
    {
      name: 'Goto College',
      dueDate: '16/09/25',
    },
    {
      name: 'learn',
      dueDate: '16/09/25',
    },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AddToDo></AddToDo>
      <Addheader onNewItem={handleNewItem}></Addheader>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
