import React from "react";

const TodoCheckbox = (props) => {
    return <input type="checkbox" checked={props.completed} onChange={() => props.completeTodoProps(props.id)} />
}

export default TodoCheckbox