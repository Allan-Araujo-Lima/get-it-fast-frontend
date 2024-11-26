import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const Registro = () => {
    const { onSignup } = useAuth();

    const formSchema = z
        .object({
            first_name: z.string().min(2, {
                message: "Nome deve ter no mínimo 2 letras."
            }),
            last_name: z.string().min(2, {
                message: "Nome deve ter no mínimo 2 letras."
            }),
            email: z.string().email("Email inválido"),
            password: z.string().min(8, {
                message: "A senha deve ter no mínimo 8 caracteres."
            }),
            password_confirmation: z.string().min(8, {
                message: "A senha deve ter no mínimo 8 caracteres."
            })
        })
        .passthrough()
        .refine(({ password, password_confirmation }) => password === password_confirmation, {
            message: "As senhas devem ser iguais.",
            path: ["password_confirmation"]
        });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        onSignup(values);
    };

    return (
        <main className="flex h-screen bg-gray-100 md:grid grid-cols-3">
            <div className="hidden text-center text-[#eff1ed] pt-12 md:block bg-[#373d20] col-span-1">
                <h2 className="text-6xl m-3">GetItFast</h2>
                <p>Cadastre-se e encontre os produtos certos na hora certa!</p>
            </div>
            <div className="flex w-full justify-center items-center col-span-2">
                <Form {...form}>
                    <form
                        className="flex flex-col w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <h1 className="text-2xl font-bold text-gray-800 text-center">Registrar</h1>
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Primeiro nome</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Último nome</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">E-mail</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            {...field}
                                            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Senha</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            {...field}
                                            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password_confirmation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Confirme sua senha</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            {...field}
                                            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            type="submit"
                        >
                            Registrar
                        </button>
                    </form>
                </Form>
            </div>
        </main>
    );
};
