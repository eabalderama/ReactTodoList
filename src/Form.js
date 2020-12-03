import React from 'react';

const Form = ({setInputText, setTodos, todos, inputText, setFilter}) => {
    
    //Sets the value of the inputText state
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    //Handles the event when submit button is clicked
    const submitHandler = (e) => {
        e.preventDefault();
        if(inputText.trim() !== ""){
            setTodos([...todos, {text: inputText, status: false, id: Math.random() * 1000}]);
        }
        setInputText('');
    }

    //Sets the value of the filter state
    const filterHandler = (e) => {
        setFilter(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;