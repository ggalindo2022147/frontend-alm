import React, { useState } from 'react';
import { updateTask } from '../services'; // Importa la función para actualizar la tarea
import toast from 'react-hot-toast';
import '../components/css/updateTask.css';

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
    <div className='update-task-container'>
      <form action="" className='update-task-form'>
        <div className='div-input-container'>
          <label className='update-text-container'>Nombre:</label>
          <input type="text" name="nombre" value={editedTask.nombre} onChange={handleInputChange} className='update-input' />
        </div>
        <div className='div-input-container'>
          <label className='update-text-container'>Descripción:</label>
          <input type="text" name="descripcion" value={editedTask.descripcion} onChange={handleInputChange} className='update-input'/>
        </div>
        <div className='div-input-container'>
          <label className='update-text-container'>Fecha de inicio:</label>
          <input type="date" name="fechaInicio" value={editedTask.fechaInicio} onChange={handleInputChange} className='update-input' />
        </div>
        <div className='div-input-container'>
          <label className='update-text-container'>Fecha de cierre:</label>
          <input type="date" name="fechaCierre" value={editedTask.fechaCierre} onChange={handleInputChange} className='update-input' />
        </div>
        <div className='div-input-container'>
          <label className='update-text-container'>Creador:</label>
          <input type="text" name="creador" value={editedTask.creador} onChange={handleInputChange} className='update-input' />
        </div>
        <button onClick={handleUpdateTask}>Guardar cambios</button>
      </form>
    </div>
  );
};

export default EditarTask;
