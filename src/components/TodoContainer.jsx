import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import CountBar from "./CountBar";

const TodoContainer = () => {
    const initialTodosState = [
        {
            id: 1,
            title: "Wake up",
            completed: true
        },
        {
            id: 2,
            title: "Go to gym",
            completed: false
        },
        {
            id: 3,
            title: "Go to sleep",
            completed: false
        }
    ]
    const initialTodosCountState = {
        total: initialTodosState.length,
        completed: initialTodosState.filter(todo => todo.completed).length,
        deleted: 0
    }
    const [todos, setTodo] = useState(initialTodosState)
    const [count, setCount] = useState(initialTodosCountState)
    const getNewCountState = (property, value = true) => {
        const newCountState = { ...count }
        newCountState[property] = value ? newCountState[property] + 1 : newCountState[property] - 1

        return newCountState
    }
    const deleteTodo = (id) => {
        setTodo([...todos.filter(todo => todo.id !== id)])
        setCount(getNewCountState('deleted'))
    }
    const completeTodo = (id) => {
        let isCompleted = false
        setTodo([...todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                isCompleted = todo.completed
            }

            return todo
        })])
        setCount(getNewCountState('completed', isCompleted))
    }
    const addTodo = (title) => {
        const id = todos[todos.length - 1].id + 1
        const newTodo = {
            id: id,
            title: title,
            completed: false
        }

        setTodo([...todos, newTodo])
        setCount(getNewCountState('total'))
    }

    return (
        <div className="todo-container d-flex flex-column h-100">
            <TodoHeader />
            <CountBar countTodosProps={count} />
            <TodoList
                todos={todos}
                deleteTodoProps={deleteTodo}
                completeTodoProps={completeTodo}
                addTodoProps={addTodo}
            />
        </div>
    )
}

export default TodoContainer