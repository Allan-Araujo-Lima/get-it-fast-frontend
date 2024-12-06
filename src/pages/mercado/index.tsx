import { GetAllProducts } from "@/productRequests/products";
import { useEffect, useState } from "react";

type IProduct = {
    id: string;
    name: string;
    description: string;
    price: number;
    amount: number;
    expiration: Date;
    image: File | string;
};

export const Mercado = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await GetAllProducts();
                setProducts(response);
            } catch (error) {
                console.error("Erro ao buscar os produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main>
            <h1>Mercado</h1>
            <article>
                <section>
                    {products.map((product) => (
                        <div key={product.id}>
                            <p>Nome: {product.name}</p>
                            <p>Preço: {product.price}</p>
                            <p>Disponível: {product.amount} unidade(s)</p>
                            <p>Data de vencimento: {product.expiration.toString()}</p>
                        </div>
                    ))}
                </section>
            </article>
            <button onClick={() => console.log(products)}>
                Aquiii
            </button>
        </main>
    );
};
