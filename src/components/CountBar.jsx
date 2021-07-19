import React from "react";

const CountBar = (props) => {
    return (
        <div className="w-100 d-flex justify-content-center p-3">
            <div className="w-50 d-flex justify-content-between">
                <div>{`Total: ${props.countTodosProps.total}`}</div>
                <div>{`Completed: ${props.countTodosProps.completed}`}</div>
                <div>{`Deleted: ${props.countTodosProps.deleted}`}</div>
            </div>
        </div>
    )
}

export default CountBar