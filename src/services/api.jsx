import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3000/almacenadora/v1",
    timeout: 5000
});

export const addTask = async (data) => {
    try {
        return await apiClient.post('/tarea/')
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}