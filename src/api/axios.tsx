import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL as string,
});

export const aws = axios.create({
    baseURL: import.meta.env.VITE_AWS_URL as string,
})

api.interceptors.request.use((e) => {
    return e;
})