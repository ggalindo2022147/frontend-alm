/*import toast from "react-hot-toast";
import {editTask as updateTask } from '../../services'

export const useEditarTask = () => {
    const editTask = async (taskId) => {

        console.log("taskid", taskId)
        try {
            const responseData = await updateTask(taskId, { estado: "data"})

                if(responseData.error) {
                    return toast.error(
                        responseData.e?.response?.data || 'no se puede editar tarea');
                }
    toast.success('La tarea ha sido editada exitosamente');
        }catch (e) {
            toast.error('ocurrio un error al cambiar el estado de la tarea', e)
        }
    }
        return {editTask};
    
    }
*/
import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { geteditTask, updategeteditTask } from "../../services"

export const useEditarTask = () => {
    const [editarTaskSettings, seteditarTaskSettings] = useState()

    const fetchEditarTaskSettings = async (taskId) => {
        const response = await geteditTask(taskId);
    
        if(response.error){
            toast.error(
                response.e?.response?.data || 'Ocurrió un error al obtener los datos de la tarea'
            );
            return;
        }
        seteditarTaskSettings({
            nombre: response.data.nombre,
            descripcion: response.data.descripcion,
            fechaInicio: response.data.fechaInicio,
            fechaCierre: response.data.fechaCierre,
            creador: response.data.creador
        });
    };
    
    const saveSettings = async (data, taskId) => {
        const response = await updategeteditTask(taskId, data);
    
        if(response.error){
            toast.error(
                response.e?.response?.data || 'Error al actualizar la información'
            );
            return;
        }
        toast.success('Información actualizada exitosamente');
    };
    
    useEffect(() =>{
        fetchEditarTaskSettings()
    }, [])

    return {
        isFetching: !editarTaskSettings,
        editarTaskSettings,
        saveSettings,
        seteditarTaskSettings,
        fetchEditarTaskSettings, // Exponer esta función
    };
    
}