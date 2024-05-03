import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {addTask as addTaskRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useTask = () => {
    const [isLoading, setIsLoading] = useState(false); 

    const navigate = useNavigate();

    const addTask = async (nombre, descripcion, fechaInicio, fechaCierre, creador) => {
    setIsLoading(true);

    const response = await addTaskRequest({
        nombre,
        descripcion,
        fechaInicio,
        fechaCierre,
        creador
    });
    
    setIsLoading(false);

    if (response.error) {
        return toast.error(
        response.e?.response?.data || 'Ocurrio un error al guardar la tarea'
        )
    }

    toast.success('Tarea guardada con éxito');
    navigate('/');
    }


    
    return{
        addTask,
        isLoading
    }
}