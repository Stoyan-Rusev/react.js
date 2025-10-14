import { useEffect, useState } from 'react';
import TodoItem from './TodoItem'

export default function TodoTable() {
    const [todos, setTodos] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(result => result.json())
            .then(data => {
                setTodos(Object.values(data));
                setIsPending(false);
            })
            .catch(err => console.log('Error'));
    }, []);

    const changeStatusHandler = (todoId) => {
        setTodos(todos => todos.map(todo => todoId === todo._id ? { ...todo, isCompleted: !todo.isCompleted} : todo));        
    }

    return (
        < section className="todo-list-container" >
            <h1>Todo List</h1>

            {/* <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div> */}

            <div className="table-wrapper">
                {isPending && (
                    <div className="loading-container">
                        <div className="loading-spinner">
                            <span className="loading-spinner-text">Loading</span>
                        </div>
                    </div>
                )}

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {todos.map((todo) => < TodoItem 
                        key={todo._id} 
                        _id={todo._id}
                        todo={todo} 
                        changeStatusHandler={changeStatusHandler}
                        />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}