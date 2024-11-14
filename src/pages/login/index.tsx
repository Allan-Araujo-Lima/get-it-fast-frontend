import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

export const Login = () => {

    const form = useForm()

    return (
        <main className="flex h-full justify-center items-center">
            <Form {...form}>
                <form className="flex flex-col max-w-60 bg-[#373d2070] rounded-xl pt-2 px-6" onSubmit={form.handleSubmit((data) => console.log(data))}>
                    <FormField
                        control={form.control}
                        name="login"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
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