import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import pera from "../../assets/pera.jpg";
import hand from "../../assets/icons/hand.svg";
import earth from "../../assets/icons/earth.svg";
import handshake from "../../assets/icons/handshake.svg";
import shopping_cart from "../../assets/icons/shopping-cart.svg";

export const Home = () => {
    const carouselItems = [
        { title: "Arroz Integral 1kg", description: "De R$12,00 por R$8,00. Validade: 15 dias restantes." },
        { title: "Leite Desnatado 1L", description: "De R$6,00 por R$4,50. Validade: 10 dias restantes." },
        { title: "Pão Integral 500g", description: "De R$8,00 por R$5,00. Validade: 5 dias restantes." },
    ];

    const benefits = [
        { title: "Economize Dinheiro", description: "Produtos de alta qualidade com preços reduzidos." },
        { title: "Reduza o Desperdício", description: "Compras conscientes e sustentáveis." },
        { title: "Entrega Rápida", description: "Receba seus produtos rapidamente." },
        { title: "Ajude o Comércio Local", description: "Diminua os prejuízos sofridos pelos comerciantes." }
    ];

    const testimonials = [
        { author: "Ana Paula", feedback: "Com o GetItFast, economizei muito e ajudei o meio ambiente!" },
        { author: "Carlos Silva", feedback: "Produtos de qualidade por preços inacreditáveis. Recomendo!" },
    ];

    return (
        <main className="w-full h-auto text-center p-6 bg-gradient-to-b from-green-100 to-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl overflow-hidden shadow-xl bg-white">
                <img className="hidden md:block w-full object-cover" src={pera} alt="Frutas frescas" />
                <div className="flex flex-col justify-center items-center p-8 bg-green-700 text-white col-span-full md:col-span-2">
                    <h1 className="text-4xl font-bold">Bem-vindo(a) à GetItFast!</h1>
                    <p className="text-lg mt-2">Compre seus produtos conosco e economize!</p>
                    <p className="text-sm text-gray-200 mt-2 max-w-md">
                        Somos especializados na intermediação de produtos próximos da data de validade.
                    </p>
                </div>
            </div>

            <Separator className="my-8" />

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[hand, earth, handshake, shopping_cart].map((icon, index) => (
                    <Card key={index} className="p-6 shadow-lg border border-gray-300 rounded-xl bg-white">
                        <CardHeader className="pb-4 flex justify-center">
                            <img src={icon} className="w-14 h-14" alt="Ícone" />
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-lg font-semibold text-gray-700">{benefits[index].title}</p>
                            <p className="text-sm text-gray-500 mt-2">{benefits[index].description}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            <Separator className="my-10" />

            <section className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Produtos em Destaque</h2>
                <Carousel className="w-full max-w-4xl">
                    <CarouselContent className="gap-4">
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index}>
                                <Card className="flex flex-col shadow-lg border border-gray-300 rounded-xl bg-white">
                                    <CardTitle className="text-lg font-bold pt-4 text-gray-800">{item.title}</CardTitle>
                                    <CardContent className="flex-1 flex items-center justify-center p-6 text-gray-600">
                                        <span>{item.description}</span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-gray-600 hover:text-gray-800" />
                    <CarouselNext className="text-gray-600 hover:text-gray-800" />
                </Carousel>
            </section>

            <Separator className="my-10" />

            <section className="flex flex-col md:flex-row justify-center gap-6">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="w-full max-w-md p-6 shadow-lg border border-gray-300 rounded-xl bg-white">
                        <CardContent>
                            <p className="italic text-gray-600">"{testimonial.feedback}"</p>
                            <p className="text-right font-bold text-gray-800 mt-2">- {testimonial.author}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            <Separator className="my-10" />

            <section className="bg-green-600 p-8 rounded-xl shadow-lg text-white text-center max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold">Cadastre-se Agora!</h2>
                <p className="text-gray-200 mt-2">
                    Crie sua conta e comece a economizar com produtos de qualidade e preços imbatíveis.
                </p>
                <Button className="mt-4 bg-white text-green-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100">
                    Criar Conta
                </Button>
            </section>
        </main>
    );
};
