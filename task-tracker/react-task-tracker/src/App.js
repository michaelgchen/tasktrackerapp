import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      reminder: false, 
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
    },
    {
        id: 2, 
        reminder: true,
        text: 'Gym',
        day: 'Feb 24th at 9:30pm',
    },
    {
        id: 3, 
        reminder: false,
        text: 'Study',
        day: 'Feb 10th at 2:30pm',
    },
  ]) 

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id)) //setting tasks to filter tasks
  }
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id) ? {...task, reminder: !task.reminder} : task))
    console.log("hi", "hey", id)
  }

  return (
    <div className="container">
      <Header title = "Hello" footer = "Bye"></Header>
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}></Tasks> : 'No tasks to show'}
    </div>
  );
}

export default App;
