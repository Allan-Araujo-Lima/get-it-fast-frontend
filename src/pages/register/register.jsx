import { Form, FormControl, FormField, FormItem, FormLabel } from "../../components/ui/form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';

import api from "../../api/axios";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const formSchema = z.object({
    first_name: z.string().min(3, "O nome deve ter no mínimo 3 letras."),
    last_name: z.string().min(3, "O último nome deve ter no mínimo 3 letras."),
    email: z.string().email("Formato de e-mail inválido."),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres.")
});

export function ProfileForm() {

    const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const onSubmit = async (values) => {
        if (values.password !== values.password_confirmation) {
            return toast.warning("As senhas não conferem.")
        }
        try {
            await api.post('/users/signup', {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                password: values.password
            })
            toast.success("Usuário criado com sucesso.")
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error("Erro inesperado, tente novamente.")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Primeiro nome
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Último nome
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                E-mail
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type="email" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Senha
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type="password" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password_confirmation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Confirme sua senha
                            </FormLabel>
                            <FormControl>
                                <Input type="password" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}