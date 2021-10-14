import { useState } from "react";
import TodoCreate from "../todo-create/TodoCreate";
import TodoList from "../todo-list/TodoList";
import "./Todo.css";

const Todo = () => {
    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Eat' },
        { id: 2, title: 'Sleep' },
        { id: 3, title: 'Code' },
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        // console.log(todo)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo;