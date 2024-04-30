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

export const deleteTask = async (taskId) => {
    console.log(taskId)
    try {
        return await apiClient.delete(`/tarea/${taskId}`)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}