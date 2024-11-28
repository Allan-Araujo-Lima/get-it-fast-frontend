import { api } from "./api/axios";

interface IProduct {
    name: string;
    description: string;
    price: number;
    amount: number;
    expiration: Date;
}

export const NewProduct = async (dataProduct: IProduct) => {
    try {
        const response = await api.post('/products', dataProduct);
        return (response);
    } catch (error: any) {
        if (error.response) {
            console.log(error.response.data);
        }
    }
}