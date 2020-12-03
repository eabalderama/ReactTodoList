import React from 'react';

import Todo from './Todo.js';

const TodoList = ({todos, setTodos}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">

                {todos.map((todo) => (
                    <Todo 
                        key={todo.id} 
                        id={todo.id} 
                        todo={todo.text} 
                        status={todo.status} 
                        todos={todos} 
                        setTodos={setTodos}
                    />   
                ))}
                         
            </ul>
        </div>
    );
}

export default TodoList;