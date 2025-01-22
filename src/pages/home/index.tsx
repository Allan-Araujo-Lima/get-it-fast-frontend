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
        {
            title: "Arroz Integral 1kg",
            description: "De R$12,00 por R$8,00. Validade: 15 dias restantes.",
        },
        {
            title: "Leite Desnatado 1L",
            description: "De R$6,00 por R$4,50. Validade: 10 dias restantes.",
        },
        {
            title: "Pão Integral 500g",
            description: "De R$8,00 por R$5,00. Validade: 5 dias restantes.",
        },
    ];

    const benefits = [
        {
            title: "Economize Dinheiro",
            description: "Produtos de alta qualidade com preços reduzidos.",
        },
        {
            title: "Reduza o Desperdício",
            description: "Compras conscientes e sustentáveis.",
        },
        {
            title: "Entrega Rápida",
            description: "Receba seus produtos rapidamente.",
        },
    ];

    const testimonials = [
        {
            author: "Ana Paula",
            feedback: "Com o GetItFast, economizei muito e ajudei o meio ambiente!",
        },
        {
            author: "Carlos Silva",
            feedback: "Produtos de qualidade por preços inacreditáveis. Recomendo!",
        },
    ];

    return (
        <main className="w-full h-auto text-center p-4 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg overflow-hidden shadow-lg bg-gray-200">
                <img className="w-0 lg:w-full col-span-1" src={pera} />
                <div className="flex flex-col justify-between w-full p-6 text-center bg-slate-700 col-span-full lg:col-span-2">
                    <div className="pt-8">
                        <h1 className="text-4xl font-bold text-white">Bem-vindo(a) a GetItFast!</h1>
                        <h2 className="text-xl text-gray-200 mt-2">Compre seus produtos conosco</h2>
                        <h3 className="text-sm text-gray-300 mt-2">
                            Somos especializados na intermediação de produtos próximos da data de validade.
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <Card className="p-4 rounded-lg shadow-none bg-transparent border-none">
                            <CardHeader className="pb-1">
                                <img src={hand} className="w-12 h-12" />
                            </CardHeader>
                            <CardContent className="text-start">
                                <p className="text-lg font-semibold">Economize até 75%</p>
                                <p className="text-sm mt-2">Compre produtos de qualidade com descontos incríveis.</p>
                            </CardContent>
                        </Card>
                        <Card className="p-4 rounded-lg shadow-none bg-transparent border-none">
                            <CardHeader className="pb-1">
                                <img src={earth} className="w-12 h-12" />
                            </CardHeader>
                            <CardContent className="text-start">
                                <p className="text-lg font-semibold">Sustentabilidade</p>
                                <p className="text-sm mt-2">Diminua o desperdício e o descarte desnecessário de produtos.</p>
                            </CardContent>
                        </Card>
                        <Card className="p-4 rounded-lg shadow-none bg-transparent border-none">
                            <CardHeader className="pb-1">
                                <img src={handshake} className="w-12 h-12" />
                            </CardHeader>
                            <CardContent className="text-start">
                                <p className="text-lg font-semibold">Ajuda coletiva</p>
                                <p className="text-sm mt-2">Diminuição do prejuízo sofrido pelo desperdício.</p>
                            </CardContent>
                        </Card>
                        <Card className="p-4 rounded-lg shadow-none bg-transparent border-none">
                            <CardHeader className="pb-1">
                                <img src={shopping_cart} className="w-12 h-12" />
                            </CardHeader>
                            <CardContent className="text-start">
                                <p className="text-lg font-semibold">Tudo que precisar</p>
                                <p className="text-sm mt-2">Encontre de tudo aqui na GetItFast.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Separator className="my-6" />

            <section className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Produtos em Destaque</h2>
                <Carousel
                    className="w-full max-w-4xl"
                    opts={{ align: "center", loop: true }}
                >
                    <CarouselContent className="gap-4">
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index}>
                                <Card className="flex flex-col shadow-lg border border-gray-200 rounded-lg">
                                    <CardTitle className="text-lg font-bold pt-4 text-gray-800">
                                        {item.title}
                                    </CardTitle>
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

            <Separator className="my-8" />

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 shadow-md border border-gray-200 rounded-lg">
                        <CardTitle className="text-lg font-semibold text-gray-800 mb-2">
                            {benefit.title}
                        </CardTitle>
                        <CardContent className="text-sm text-gray-600">
                            <p>{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            <Separator className="my-8" />

            <section className="my-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">O que nossos clientes dizem</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="w-full max-w-md p-6 shadow-md border border-gray-200 rounded-lg">
                            <CardContent>
                                <p className="italic text-gray-600">"{testimonial.feedback}"</p>
                                <p className="text-right font-bold text-gray-800 mt-2">- {testimonial.author}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Separator className="my-8" />

            <section className="bg-green-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-green-800 mb-2">Cadastre-se Agora!</h2>
                <p className="text-gray-600 mb-4">
                    Crie sua conta e comece a economizar com produtos de qualidade e preços imbatíveis.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md">
                    Criar Conta
                </Button>
            </section>
        </main>
    );
};