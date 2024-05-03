import { useState } from "react";
import toast from "react-hot-toast";
import { getTasks as getTaskRequest } from "../../services";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const taskData = await getTaskRequest();

            if (taskData.error) {
                toast.error(
                    taskData.e.response.data || "Error al obtener las tareas"
                );
                return;
            }

            setTasks(taskData.data);
            return taskData.data;
        } catch (error) {
            console.error("Error al obtener las tareas:", error);
            toast.error("Error al obtener las tareas");
        }
    };

    return {
        tasks,
        getTasks,
    };
};
