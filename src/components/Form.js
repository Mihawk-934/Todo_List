import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
                ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
    }

    return (
        <form>
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit" disabled={inputText.length > 0 ? false : true}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={(e) => setStatus(e.target.value)} name="todos" className="filter-todo">
                    <option className="option" value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
