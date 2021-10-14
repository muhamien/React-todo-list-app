import './TodoList.css';

const TodoList = (props) => {
    // console.log(props.dataTodos)
    return (
        <ul>
            {
                props.dataTodos.map((todos) => {
                    return (
                        <li key={todos.id}>{todos.title}</li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList;