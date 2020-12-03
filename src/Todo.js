import React from 'react';

const Todo = ({id, todo, status, todos, setTodos}) => {
    
    //Handles the event when the trash button is clicked
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== id));
    }


    //Handles the the event when the check button is clicked
    const completedHandler = () => {
        //Maps through the todos object and toggles the status of the selected todo to true/false
      setTodos(todos.map((i) => {
        if(i.id === id){
            return{
                ...i, status: !i.status
            };
        }
        return {...i};
      }));
    }

    return (
        <div className={`todo ${status ? 'completed' : ''}`}>
            <li className='todo-li'>{todo}</li>
            <button onClick={completedHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    );
}

export default Todo;