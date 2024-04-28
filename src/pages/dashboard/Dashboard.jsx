import React, { useState, useEffect } from "react";
import { AddTask } from "../../components/AddTask";
import { TaskTable } from "../../components/TaskTable";
import { getTasks } from "../../services/";
import './dashboard.css';

export const Dashboard = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState({ tareas: [] });

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

  return (
    <div className="dashboard-container">
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
        <div>
          <h1>Dashboard</h1>
          <TaskTable tasks={tasks.tareas} />
        </div>
      )}
    </div>
  );
};
