import React from "react";
import {Button} from "react-bootstrap";

const DeleteButton = (props) => {
    return (
        <Button className="btn-danger" onClick={() => props.deleteTodoProps(props.id)}>Delete</Button>
    )
}

export default DeleteButton