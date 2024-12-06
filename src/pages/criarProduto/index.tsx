import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AmountInput, MonetaryInput } from "@/inputFormater"
import { NewProduct } from "@/productRequests/products"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

export const Produto = () => {

    const { toast } = useToast();
    const navigate = useNavigate();

    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Nome deve ter no mínimo 2 letras.",
        }),
        description: z.string().min(2, {
            message: "Descrição deve ter no mínimo 2 letras.",
        }),
        price: z.number({ message: "Campo obrigatório." }).positive({
            message: "Preço deve ser um valor positivo.",
        }),
        amount: z.number({ message: "Campo obrigatório." }).int().positive({
            message: "Quantidade deve ser um número inteiro positivo.",
        }),
        expiration: z.date({
            required_error: "Data de vencimento é obrigatória.",
        }),
        image: z.instanceof(File, {
            message: "O arquivo deve ser uma imagem válida (PNG ou JPEG).",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await NewProduct(values);

            toast({
                title: "Sucesso!",
                description: "Produto cadastrado com sucesso.",
                variant: "default",
            });

            navigate("/");
        } catch (error: any) {
            console.error("Erro ao cadastrar o produto:", error.message);

            toast({
                title: "Erro ao cadastrar produto",
                description: error.message || "Ocorreu um erro inesperado.",
                variant: "destructive",
            });
        }
    };

    return (
        <main className="flex h-screen bg-gray-100 md:grid grid-cols-3">
            <div className="hidden text-center text-[#eff1ed] pt-12 md:block bg-[#373d20] col-span-1">
                <h2 className="text-6xl m-3">Cadastrar Produto</h2>
                <p>Adicione o produto com todas as informações necessárias!</p>
            </div>
            <div className="flex w-full justify-center items-center col-span-2">
                <Form {...form}>
                    <form
                        className="flex flex-col w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <h1 className="text-2xl font-bold text-gray-800 text-center">Registrar Produto</h1>

                        <FormField
                            defaultValue={""}
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Nome do produto</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Caixa de sabão em pó" className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            defaultValue={""}
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Descrição do produto</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder="Caixa de sabão em pó da marca X, sem avarias." className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Preço da unidade</FormLabel>
                                    <FormControl>
                                        <MonetaryInput {...field} className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                            onChange={(value: number) => field.onChange(value)}
                                            placeholder="R$ 50,00"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Quantidade disponível</FormLabel>
                                    <FormControl>
                                        <AmountInput {...field} className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                            onChange={(value: number) => field.onChange(value)}
                                            placeholder="5"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="expiration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Data de vencimento</FormLabel>
                                    <FormControl>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        "w-full py-3 px-4 text-left font-normal border-gray-300 focus:ring-blue-500 focus:border-blue-500",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2" />
                                                    {field.value ? format(new Date(field.value), "dd/MM/yyyy") : <span>Escolher data</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Imagem do Produto</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />

                        <button
                            className="w-full bg-[#766153] hover:bg-[#5e4b3f] text-[#eff1ed] mt-3 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            type="submit"
                        >
                            Registrar Produto
                        </button>
                    </form>
                </Form>
            </div>
        </main >
    )
}
