import React, { useState, useEffect } from "react";
import { AddTask } from "../../components/AddTask";
import EditarTask from "../../components/EditarTask"; // Corregido el nombre del componente
import { TaskTable } from "../../components/TaskTable";
import { getTasks } from "../../services/";
import './dashboard.css';

export const Dashboard = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState({ tareas: [] });
  const [selectedTask, setSelectedTask] = useState(null); 

  const handleToggleAddTask = () => {
    setShowAddTask(!showAddTask); 
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        if (!response.error) {
          setTasks(response.data || { tareas: [] });
        } else {
          console.error('Error al obtener las tareas:', response.error);
        }
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleToggleEditTask = (task) => {
    setSelectedTask(task); 
  }

  return (
    <div className="dashboard-container" align="center">
      {!showAddTask && (
        <button className="add-task-btn" onClick={handleToggleAddTask}>
          Agregar tarea
        </button>
      )}
      
      {showAddTask && (
        <div>
          <AddTask />
        </div>
      )}

      {!showAddTask && (
        <div color="white">
          <h1>Dashboard</h1>
          <TaskTable tasks={tasks.tareas} onEditTask={handleToggleEditTask} /> {}
        </div>
      )}
      
          {!showAddTask && selectedTask && (
      <div>
        <h2>Editar Tarea</h2>
        <EditarTask task={selectedTask} /> 
      </div>
    )}


    </div>
  );
};
