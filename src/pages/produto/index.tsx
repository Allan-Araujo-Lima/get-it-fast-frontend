import { useState } from "react"
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

export const Produto = () => {
    const [date, setDate] = useState<Date>()

    const formSchema = z
        .object({
            name: z.string().min(2, {
                message: "Nome deve ter no mínimo 2 letras."
            }),
            description: z.string().min(2, {
                message: "Nome deve ter no mínimo 2 letras."
            }),
            price: z.number().positive(),
            amount: z.number().int().positive(),
            expiration: z.date()
        });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("values", values)
    }

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
                                        <Input {...field} placeholder="R$ 50,00" className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
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
                                        <Input {...field} placeholder="5" className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
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
                                        <Popover {...field}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        "w-full py-3 px-4 text-left font-normal border-gray-300 focus:ring-blue-500 focus:border-blue-500",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2" />
                                                    {date ? format(date, "dd/MM/yyyy") : <span>Escolher data</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
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
        </main>
    )
}
