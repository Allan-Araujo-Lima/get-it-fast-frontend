import { api } from "../api/axios";

interface IProduct {
    name: string;
    description: string;
    price: number;
    amount: number;
    expiration: Date;
    image: File | string;
};

export const NewProduct = async (dataProduct: IProduct) => {
    try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            throw new Error("Usuário não autenticado. Token não encontrado.");
        };

        const formData = new FormData();
        formData.append('name', dataProduct.name);
        formData.append('description', dataProduct.description);
        formData.append('price', dataProduct.price.toString());
        formData.append('amount', dataProduct.amount.toString());
        formData.append('expiration', dataProduct.expiration.toISOString());
        formData.append('file', dataProduct.image);

        const response = await api.post('/products', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("Erro na resposta da API:", error.response.data);
            throw { message: error.response.data };
        } else {
            console.error("Erro inesperado:", error.message || error);
            throw { message: error.message };
        }
    }
};

export const GetAllProducts = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("Usuário não autenticado. Token não encontrado.");
    };

    try {
        const response = await api.get('/products', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data[0];
    } catch (error: any) {
        if (error.response) {
            console.error("Erro na resposta da API:", error.response.data);
            throw { message: error.response.data };
        } else {
            console.error("Erro inesperado:", error.message || error);
            throw { message: error.message };
        }
    }
}
