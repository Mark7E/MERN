import React from 'react';
import '../style.css'

const ViewTask = (props) => {
    return (
        <div className="checkbox">
            <input type="checkbox" checked={props.toDoList.completed}  onChange={() => props.finishedTask(props.idx)} />
            <label className="strikethrough">{props.toDoList.task} <button onClick={() => props.deleteTask(props.idx) } >Delete</button></label>
        </div>
    )
}

export default ViewTask
