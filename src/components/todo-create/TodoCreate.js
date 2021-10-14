import { useState } from 'react'
import './TodoCreate.css'

const TodoCreate = (props) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: title
        }
        props.onCreateTodo(newTodo)
        setTitle('')
        // console.log(newTodo)
    }

    const handleInput = (event) => {
        setTitle(event.target.value)
        // console.log(title)
    }



    return (
        <form classname="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleInput} placeholder="Add new todo list" />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate;