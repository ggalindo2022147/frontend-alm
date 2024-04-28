import { useState } from "react";
import toast from "react-hot-toast";
import { getTasks as getTaskRequest } from "../../services";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const taskData = await getTaskRequest();

        if (taskData.error) {
            return toast.error(
                taskData.e.response.data || "Error al obtener las tareas"
            );
        }

        setTasks(taskData.data);

        return taskData.data;
    }

}