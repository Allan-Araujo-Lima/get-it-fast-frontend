import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import pizza from "../../assets/pizza.svg";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const Login = () => {
    const { onLogin } = useAuth();
    const { toast } = useToast();
    const navigate = useNavigate();


    const formSchema = z.object({
        email: z.string().email("Email inválido."),
        password: z.string()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await onLogin(values);

            toast({
                title: "Sucesso!",
                description: "Login efetuado com sucesso!",
                variant: "default",
            });
            navigate("/");
        } catch (error: any) {
            toast({
                title: "Erro!",
                description: error.message || "Produto cadastrado com sucesso.",
                variant: "destructive",
            });
        }
    };

    return (
        <main className="flex h-full bg-gray-100 md:grid grid-cols-3 h-max-screen overflow-hidden">
            <div className="hidden text-center text-[#eff1ed] pt-12 md:block bg-[#373d20] col-span-1">
                <h2 className="text-6xl m-3">GetItFast</h2>
                <p>Entre e descubra novas possibilidades.</p>
                <img className="h-3/5" src={pizza}></img>
            </div>
            <div className="flex justify-center h-screen w-full items-center col-span-2">
                <Form {...form}>
                    <form
                        className="flex flex-col w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <h1 className="text-2xl font-bold text-gray-800 text-center">Login</h1>
                        <FormField
                            defaultValue=""
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">E-mail</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="exemplo@gmail.com" className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            defaultValue=""
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
                        <button
                            className="w-full bg-[#766153] hover:bg-[#5e4b3f] text-[#eff1ed] mt-3 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            type="submit"
                        >
                            Login
                        </button>
                        <p className="text-center text-gray-600 mt-4">
                            <a href="#" className="text-blue-500 hover:underline">
                                Esqueceu a senha?
                            </a>
                        </p>
                    </form>
                </Form>
            </div>
        </main>
    );
};
