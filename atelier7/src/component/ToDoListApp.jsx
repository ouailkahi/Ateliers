import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import './ToDoListApp.css';

export default function ToDoListApp() {
  const [tasks, setTasks] = useState([
    {                                                                                                                                                                                 
      description: "Reviser HTML/CSS",
      completed: true,
      pinned: false,
    },
    {
      description: "Reviser mongodb",
      completed: false,
      pinned: false,
    },
    {
      description: "Reviser Javascript",
      completed: false,
      pinned: false,
    }
  ]);
  const togglePin = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].pinned = !updatedTasks[index].pinned;
    setTasks(updatedTasks);
  };
  

  const [newTask, setNewTask] = useState(""); 

  const addTask = () => {
    if (newTask.trim() === "") return; 

    const updatedTasks = [...tasks, { description: newTask, completed: false }];
    setTasks(updatedTasks)
    setNewTask(""); 
  };


  const completedTasks = tasks.filter((task) => task.completed).length;
  const inProgressTasks = tasks.length - completedTasks;


  const deleteTasks = (type) => {
    let updatedTasks;
    switch (type) {
      case 'all':
        updatedTasks = [];
        break;
      case 'completed':
        updatedTasks = tasks.filter((task) => !task.completed);
        break;
      case 'inProgress':
        updatedTasks = tasks.filter((task) => task.completed);
        break;
      default:
        updatedTasks = tasks;
    }
    setTasks(updatedTasks);
  };

  

  return (
    <div>
      <div>
        <p>Tasks terminées: {completedTasks}</p>
        <p>Tasks en cours: {inProgressTasks}</p>
      </div>
      {tasks
  .slice(0)
  .sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1))
  .map((value, key) => (
    <div key={key}>
      <p>{value.description}</p>
      {value.completed ? <AiOutlineCheck /> : <AiOutlineClose />}
      <button onClick={() => togglePin(key)}>
        {value.pinned ? "Détacher" : "Épingler"}
      </button>
    </div>
  ))}


      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button onClick={addTask}>Add</button>
        <button onClick={() => deleteTasks('all')}>Tous</button>
        <button onClick={() => deleteTasks('completed')}>Terminé</button>
        <button onClick={() => deleteTasks('inProgress')}>En cours</button>
      </div>
    </div>
  );
}
