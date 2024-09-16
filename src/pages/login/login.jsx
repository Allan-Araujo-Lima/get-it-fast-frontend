import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const formSchema = z.object({
    email: z.string().email("Formato de e-mail inválido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres.")
});

export function ProfileForm() {
    const {
        onSignIn,
    } = useAuth()

    const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values) => {
        console.log(values);
        try {
            await onSignIn({
                email: values.email,
                password: values.password
            })
            navigate("/painel")
        } catch (error) {
            console.log(error)
            toast.error("Erro inesperado.")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}