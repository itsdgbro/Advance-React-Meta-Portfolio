import { useState } from "react";

const ToDo = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
);


function Keys() {
    const [todos, setTodos] = useState([
        {
            id: "todo 1",
            calories: 400,
        },
        {
            id: "todo 2",
            calories: 200,
        }
    ])

    const ReverseOrder = () => {
        setTodos([...todos].reverse())
    }

    return (
        <div>
            <p>Keys</p>
            <button onClick={ReverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo) => {
                        return <ToDo key={todo.id} id={todo.id} calories={todo.calories}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Keys;
