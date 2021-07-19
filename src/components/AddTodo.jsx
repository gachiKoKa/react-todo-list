import React, { useState } from "react";

const AddTodo = (props) => {
    const [title, setTitle] = useState({
        title: ""
    })
    const onChange = e => {
        setTitle({
            title: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        props.addTodoProps(title.title)
        setTitle({
            title: ""
        })
    }

    return (
        <div className="add-todo w-50 p-3 m-1 d-flex justify-content-between align-items-center border border-light shadow-sm bg-white rounded">
            <form onSubmit={onSubmit}>
                <div className="d-flex w-100">
                    <div className="m-1">
                        <input className="form-control" name="title" type="text" placeholder="Add todo..." value={title.title} onChange={onChange}/>
                    </div>
                    <div className="m-1">
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTodo