import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useRegister } from "../../../hooks/useRegister"

export const Registro = () => {

    const form = useForm()

    const handleSubmit = async (values: any) => {
        await useRegister().registerFn(values)
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
                            </FormItem>
                        )}
                    />
                    <button className="w-full bg-[#766153] text-[#eff1ed] mt-3 rounded" type="submit"><b>Registrar</b></button>
                </form>
            </Form>
        </main>
    )
}