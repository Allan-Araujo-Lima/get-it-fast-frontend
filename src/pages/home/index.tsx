import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { GetAllUsers } from "@/api/api"

export const Home = () => {

    const cardInfo = [
        {
            title: "Missão",
            description: "Fornecer produtos de excelente qualidade aos nossos clientes com um preço acessível, além de diminuir o desperdicio."
        },
        {
            title: "Visão",
            description: "Fazer com que o desperdício de produção pela sua vida útil acabe."
        },
        {
            title: "Valores",
            description: "Qualidade, Agilidade, Compromisso e Segurança."
        }
    ]

    return (
        <main className="w-full h-auto text-center p-3">
            <nav>
                <h1 className="text-3xl">Bem-vindo(a) a GetItFast!</h1>
                <h2 className="text-xl">Compre seus produtos conosco</h2>
                <p className="text-sm mt-2">Somos uma empresa especializada na intermediação de vendas de produtos com a data de validade próxima</p>
            </nav>
            <Separator className="my-4 bg-transparent" />
            <section className="flex flex-col items-center">
                <Carousel className="w-full max-w-xl"
                    opts={{
                        align: "center",
                        loop: true,
                    }}>
                    <CarouselContent>
                        {cardInfo.map((_, index) => (
                            <CarouselItem key={index}>
                                <div>
                                    <Card className="flex flex-col">
                                        <CardTitle>
                                            <h2 className="text-xl">{cardInfo[index].title}</h2>
                                        </CardTitle>
                                        <CardContent className="flex-1 items-center justify-center p-6">
                                            <span>{cardInfo[index].description}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>
                <button onClick={GetAllUsers}>Aqqq</button>
            </section>
        </main>
    )
}