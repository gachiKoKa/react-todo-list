import React from "react";
import DeleteButton from "./DeleteButton";
import TodoCheckbox from "./TodoCheckbox";

const TodoItem = (props) => {
    return (
        <React.Fragment>
            <div><TodoCheckbox id={props.todo.id} completed={props.todo.completed} completeTodoProps={props.completeTodoProps} /></div>
            <div>{props.todo.title}</div>
            <div><DeleteButton id={props.todo.id} deleteTodoProps={props.deleteTodoProps} /></div>
        </React.Fragment>
    )
}

export default TodoItem