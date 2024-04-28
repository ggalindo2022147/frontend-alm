import React from "react";
import './css/taskTable.css';

export const TaskTable = ({ tasks }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES");
    };

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
                        <tr key={index}>
                            <td>{task.nombre}</td>
                            <td>{task.descripcion}</td>
                            <td>{formatDate(task.fechaInicio)}</td>
                            <td>{formatDate(task.fechaCierre)}</td>
                            <td>{task.estadoTarea}</td>
                            <td>{task.creador}</td>
                            <td>
                                <button className="btn-editar">Editar</button>
                                <button className="btn-eliminar">Eliminar</button>
                            </td>
                        </tr>
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