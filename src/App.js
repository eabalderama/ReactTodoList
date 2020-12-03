import React, {useState, useEffect} from 'react';
import './App.css';

//Components
import Form from './Form.js';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all');
  const [filtered, setFiltered] = useState([]);

  //Run once when the app is rendered
  useEffect(() => {
    loadTodos();
  }, []); 

  //Runs everytime todos and filter changes
  useEffect(() => {
    filterHandler();
    saveTodos();
  }, [todos, filter]);

  //Handles the filtering feature
  const filterHandler = () => {
    switch(filter){
      case 'completed':
        setFiltered(todos.filter((todo) => todo.status === true));
      break;
  
      case 'incomplete':
        setFiltered(todos.filter((todo) => todo.status === false));
      break;
  
      default:
        setFiltered(todos);
      break;
    }
  }

  //Save todos in the local storage
  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  //Load todos in the local storage
  const loadTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else {
      console.log(JSON.parse(localStorage.getItem('todos')));
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  };


  return (
      <div className="app">
        <header>Todo List</header>
        <Form 
           setInputText={setInputText} 
           setTodos={setTodos} 
           todos={todos} 
           inputText={inputText}
           setFilter={setFilter}
        />
        <TodoList 
           todos={filtered} 
           setTodos={setTodos}
        />
      </div>
   
  );
}

export default App;