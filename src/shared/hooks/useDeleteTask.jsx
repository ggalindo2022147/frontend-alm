import { useState } from "react";
import toast from "react-hot-toast";
import { getDeleteTask as deleteTaskRequest} from '../../services';

export const useDeleteTask = () => {
    const deleteTaskRequest = async (tarea) => {

        if (response.error) {
            return toast.error(
            response.e?.response?.data || 'Ocurrio un error al guardar la tarea'
            )
        }

        toast.success('Tarea eliminada exitosamente')
    }
  
    return {
        useDeleteTask
      }
}