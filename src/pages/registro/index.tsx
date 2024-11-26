import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const Registro = () => {

    const { onSignup } = useAuth()

    const formSchema = z.object({
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
        }),
    })
        .passthrough()
        .refine(({ password, password_confirmation }) => password === password_confirmation, {
            message: 'As senhas devem ser iguais.',
            path: ['password_confirmation'],
        })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        onSignup(values);
    }

    return (
        <main className="flex h-full justify-center items-center">
            <Form {...form}>
                <form className="flex flex-col max-w-60 bg-[#373d2070] rounded-xl pt-2 px-6" onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Primeiro nome</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Último nome</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password_confirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirme sua senha</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <button className="w-full bg-[#766153] text-[#eff1ed] mt-3 rounded" type="submit"><b>Registrar</b></button>
                </form>
            </Form>
        </main>
    )
}