import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
});

api.interceptors.request.use((e) => {
    return e;
})