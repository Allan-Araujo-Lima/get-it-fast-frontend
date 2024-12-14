import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Home = () => {
    const { toast } = useToast();

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
        <main className="w-full h-auto text-center p-4">
            <nav className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800">Bem-vindo(a) a GetItFast!</h1>
                <h2 className="text-xl text-gray-600 mt-2">Compre seus produtos conosco</h2>
                <p className="text-sm text-gray-500 mt-2">
                    Somos especializados na intermediação de produtos próximos da data de validade.
                </p>
            </nav>

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
