import { api } from "../api/axios";

interface IProduct {
    name: string;
    description: string;
    price: number;
    amount: number;
    expiration: Date;
}

export const NewProduct = async (dataProduct: IProduct) => {
    try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            throw new Error("Usuário não autenticado. Token não encontrado.");
        }

        const response = await api.post('/products', dataProduct, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("Erro na resposta da API:", error.response.data);
            throw error.response.data;
        } else {
            console.error("Erro inesperado:", error.message || error);
            throw error;
        }
    }
};
