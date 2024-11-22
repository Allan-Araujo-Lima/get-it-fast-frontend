import { api } from "@/api/axios";

interface IRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string
}

export const useRegister = () => {
    const registerFn = async (dataRegister: IRegister) => {
        try {
            const data = await api.post('/users/signup', dataRegister)
            console.log(data)
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    return {
        registerFn
    }
}