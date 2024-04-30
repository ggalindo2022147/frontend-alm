import React, { useState } from "react";
import './css/taskTable.css';
import { useDeleteTask } from "../shared/hooks";

export const TaskTable = ({ tasks }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES");
    };

    const {deleteTask} = useDeleteTask()

    const handleDeleteTask = async (taskId) => {
        console.log("accion",taskId)
        try{
            await deleteTask(taskId)
            window.location.reload();
        }catch(e){
            console.error('fallamos',e);
        }
    }

    return (
        <table className="task-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha de Cierre</th>
                    <th>Estado</th>
                    <th>Creador</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        task.estado !== "false" && (
                            <tr key={index}>
                                <td>{task.nombre}</td>
                                <td>{task.descripcion}</td>
                                <td>{formatDate(task.fechaInicio)}</td>
                                <td>{formatDate(task.fechaCierre)}</td>
                                <td>{task.estado}</td>
                                <td>{task.creador}</td>
                                <td>
                                    <button className="btn-editar">Editar</button>
                                    {console.log("task.id:", task)}
                                    <button className="btn-eliminar" onClick={() => handleDeleteTask(task._id)}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    ))
                ) : (
                    <tr>
                        <td colSpan="7" className="no-tasks">No hay tareas disponibles</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};