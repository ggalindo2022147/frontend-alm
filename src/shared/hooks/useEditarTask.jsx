import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { getTasks, editTask } from "../../services"

export const useEditarTask = () => {
    const [EditarTaskSettings, setEditarTask] = useState()

    const fetchEditarTask = async () => {
        const response = await getTasks()

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Ocurrión un error al obtener los datos del canal'
            )
        }
        setEditarTask({
            nombre: response.data.nombre,
            descripcion: response.data.descripcion,
            fechaInicio: response.data.fechaInicio,
            fechaCierre: response.data.fechaCierre,
            creador: response.data.creador
        })
    }

    const saveSettings = async (data) => {
        const response = await editTask(data)

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Error al actualizar la información'
            )
        }

        toast.success('Información actualizada exitosamente')
    }

    useEffect(() =>{
        fetchEditarTask()
    }, [])

  return {
    isFetching: !EditarTaskSettings,
    EditarTaskSettings,
    saveSettings
  }
}