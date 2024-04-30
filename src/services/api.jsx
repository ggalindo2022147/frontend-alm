import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8080/almacenadora/v1",
    timeout: 5000
});

export const addTask = async (data) => {
    try {
        return await apiClient.post('/tarea', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getTasks = async () => {
    try {
        return await apiClient.get('/tarea')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const editTask = async (taskId, newData) => {
    try {
        return await apiClient.put(`/tarea/${taskId}`, newData);
    } catch (error) {
        return {
            error: true,
            message: error.message
        };
    }
};
