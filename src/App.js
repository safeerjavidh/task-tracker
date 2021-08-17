import {useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([])

const [toggleAdd, setToggleAdd] = useState(false)

useEffect( ()  => {
  const getTasks = async() => {
    const dataFromServer = await fetchTasks()
    setTasks(dataFromServer)
  }
  getTasks()
}, [])

const fetchTasks = async () => {
  const fetchData = await fetch('http://localhost:5000/tasks')
  const data = fetchData.json()
  return data
}
const addTask = async (task) => {

  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST', 
    headers: {
    'Content-type': 'application/json'
    }, 
    body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 10000)+1
  // const newTask = {id, ...task}

  // setTasks([...tasks, newTask])
}
const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
}

const toggleAddTask = () => {
  setToggleAdd(!toggleAdd)
}

  return (
    <div className="container">
      <Header title={'Task Tracker'} onToggle={toggleAddTask} toggleAdd={toggleAdd}/>
      {
        toggleAdd && <AddTask onAdd={addTask}/>
      }
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete}/>) : ('No tasks to show')}
    </div>
  );
}

export default App;
