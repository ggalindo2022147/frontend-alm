import React, { useState } from 'react';
import { updateTask } from '../services'; // Importa la función para actualizar la tarea
import toast from 'react-hot-toast';

const EditarTask = ({ task }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleUpdateTask = async () => {
    try {
      await updateTask(task._id, editedTask);
      toast.success('La tarea se ha actualizado correctamente');
      window.location.reload(); 
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      toast.error('Ocurrió un error al actualizar la tarea');
    }
  };
  

  return (
    <div>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={editedTask.nombre} onChange={handleInputChange} />
      </div>
      <div>
        <label>Descripción:</label>
        <input type="text" name="descripcion" value={editedTask.descripcion} onChange={handleInputChange} />
      </div>
      <div>
        <label>Fecha de inicio:</label>
        <input type="date" name="fechaInicio" value={editedTask.fechaInicio} onChange={handleInputChange} />
      </div>
      <div>
        <label>Fecha de cierre:</label>
        <input type="date" name="fechaCierre" value={editedTask.fechaCierre} onChange={handleInputChange} />
      </div>
      <div>
        <label>Creador:</label>
        <input type="text" name="creador" value={editedTask.creador} onChange={handleInputChange} />
      </div>
      <button onClick={handleUpdateTask}>Guardar cambios</button>
    </div>
  );
};

export default EditarTask;
