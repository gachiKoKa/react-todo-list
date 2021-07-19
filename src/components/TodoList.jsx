import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = (props) => {
    const completedTodo = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    return (
        <div className="todo-list d-flex flex-column align-items-center justify-content-between">
            <AddTodo addTodoProps={props.addTodoProps} />
            {props.todos.map(todo => (
                <div
                    className="todo-item w-50 p-3 m-1 d-flex justify-content-between align-items-center border border-light shadow-sm bg-white rounded"
                    style={todo.completed ? completedTodo : null}
                    key={todo.id}
                >
                    <TodoItem todo={todo} deleteTodoProps={props.deleteTodoProps} completeTodoProps={props.completeTodoProps} />
                </div>
            ))}
        </div>
    )
}

export default TodoList