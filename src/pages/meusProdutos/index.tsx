import { GetProductsByUser } from "@/productRequests/products";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // Supondo que está usando componentes ShadCN
import { Badge } from "@/components/ui/badge";
import { MonetaryOutput } from "@/inputFormater";

type IProduct = {
    id: string;
    name: string;
    description: string;
    price: number;
    amount: number;
    expiration: Date;
    image: string;
};

export const MyProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await GetProductsByUser();
                setProducts(response);
            } catch (error) {
                console.error("Erro ao buscar os produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meus Produtos</h1>
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                        <img
                            src={`${import.meta.env.VITE_AWS_URL}${product.id}`}
                            alt={product.name}
                            className="w-full h-40 object-contain rounded-t-lg"
                        />
                        <CardHeader className="p-4">
                            <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                            <CardDescription className="text-sm text-gray-500">{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-bold text-green-600">
                                    R$ <MonetaryOutput value={product.price} />
                                </p>
                                <Badge>{product.amount} unidade(s)</Badge>
                            </div>
                            <p className="text-sm text-gray-500">
                                Vencimento: {new Date(product.expiration).toLocaleDateString()}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </article>
        </main>
    );
};