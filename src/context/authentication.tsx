import { api } from "@/api/axios";
import { createContext, ReactNode } from "react";

interface IRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string
}

interface AuthenticationContext {
    onSignup: (value: IRegister) => void;
}

interface AuthenticationProps {
    children: ReactNode;
}

export const AuthenticationContext = createContext<AuthenticationContext>({} as AuthenticationContext)

export const AuthenticationProvider = ({ children }: AuthenticationProps) => {

    const onSignup = async (dataRegister: IRegister) => {
        try {
            await api.post('/users/signup', dataRegister);
            window.location.href = "/"
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }


    return (
        <AuthenticationContext.Provider value={{ onSignup }}>{children}</AuthenticationContext.Provider>
    )
}