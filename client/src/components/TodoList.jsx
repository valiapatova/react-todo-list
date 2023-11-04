import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {

    const[todos, setTodos] = useState([]);
    ///mmmmm

    useEffect(()=>{
        const baseUrl=`http://localhost:3030/jsonstore/todos`;
        fetch(baseUrl)
        .then(response=>response.json())
        .then(data=>{
            setTodos(Object.values(data));
            console.log(todos);
        })
        .catch(err=>console.log(err))
    },[]);

    const changeStatusHandler=(todoId)=>{
        setTodos(state=>state.map(todo => todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo));

    }

        return (
        // Section container 
        <section className="todo-list-container">
            <h1>Todo Task</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Task</button>
            </div>

            <div className="table-wrapper">

                {/* Loading spinner - show the load spinner when fetching the data from the server*/}
                {/* <div className="loading-container"> */}
                {/* <div className="loading-spinner"> */}
                {/* <span className="loading-spinner-text">Loading</span> */}
                {/* </div> */}
                {/* </div> */}

                {/* Todo list table */}
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.map(todo=>(

                              <TodoItem
                                   key={todo._id}
                                   _id={todo._id}
                                   text={todo.text}
                                   isCompleted={todo.isCompleted}
                                   changeStatusHandler={changeStatusHandler}
                              />         


                        ))} 

                                 

                       
                    </tbody>
                </table>
            </div>
        </section>
    );
};