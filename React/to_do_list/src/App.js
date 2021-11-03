import './App.css';
import React, {useState} from 'react';
import ViewTask from './components/ViewTask'
import FromTask from './components/FromTask';
function App() {

  const [toDoList, setToDoList] = useState([{task: "test task", completed: false}])

  const finishedTask = (id) => {
    console.log("idx to update", id);
    const toDoListCopy = [...toDoList]
    if(toDoListCopy[id].completed === true){
      toDoListCopy[id].completed = false
    } else{
      toDoListCopy[id].completed = true
    }
    // toDoListCopy[id].completed = !toDoListCopy[id].completed
    setToDoList(toDoListCopy)
  }

  const createToDo = (newTask) =>{
    const copyToDo = [...toDoList]
    copyToDo.push(newTask)
    console.log(newTask)
    setToDoList(copyToDo)
  }

  const deleteTask = (idToBeDeleted) => {
    const newFiltered = toDoList.filter((task, i) => idToBeDeleted !== i ? true : false)
    setToDoList(newFiltered);
  }

  return (
    <div className="App">
      <FromTask createToDo={createToDo} />
{
        toDoList.map((toDoList, i) => {
          return (
            <ViewTask key={i}
            toDoList={toDoList}
              idx={i}
              finishedTask ={finishedTask}
              deleteTask={deleteTask}

            />)
        })
      }

    </div>
  );
}

export default App;
