import React, {useState} from 'react'

const FromTask = ({createToDo}) => {

    const[newTask, setNewTask] = useState("")

    const addNewTask = (e) => {
        e.preventDefault();

        const myNewTask = {
            task: newTask,
            completed: false
        }
        createToDo(myNewTask)
        setNewTask("")
    }







    return (
        <div>
            <form onSubmit={addNewTask}>
                <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask}  />

                <button>Submit</button>
                
                </form> 
        </div>
    )
}

export default FromTask
