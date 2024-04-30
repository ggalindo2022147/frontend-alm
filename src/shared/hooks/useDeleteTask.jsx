import toast from "react-hot-toast";
import { deleteTask as deleteTaskRequest} from '../../services';

export const useDeleteTask = () => {
    const deleteTask = async (taskId) => {
        console.log('useDelete:',taskId)
        try {
            const responseData = await deleteTaskRequest(taskId, { estado: "eliminado" });

            if (responseData.error) {
                return toast.error(
                    responseData.e?.response?.data || 'No se Eliminar esta tarea'
                );
            }

            toast.success('La tarea ha eliminado exitosamente');
        } catch (error) {
            toast.error('Ocurrió un error al cambiar el estado de la tarea');
        }
    };

    //console.log(deleteTaskRequest);
    return { deleteTask };

};