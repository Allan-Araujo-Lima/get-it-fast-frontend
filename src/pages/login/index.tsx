import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/useAuth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const Login = () => {

    const { onLogin } = useAuth();

    const formSchema = z.object({
        email: z.string().email("Email inválido."),
        password: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        onLogin(values);
        console.log(values)
    }

    return (
        <main className="flex h-full justify-center items-center">
            <Form {...form}>
                <form className="flex flex-col max-w-60 bg-[#373d2070] rounded-xl pt-2 px-6" onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input {...field} />
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
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <button className="w-full bg-[#766153] text-[#eff1ed] mt-3 rounded" type="submit"><b>Login</b></button>
                    <FormDescription className="text-center">
                        <span className="text-[black]">Esqueceu a senha?</span>
                    </FormDescription>
                </form>
            </Form>
        </main>
    )
}