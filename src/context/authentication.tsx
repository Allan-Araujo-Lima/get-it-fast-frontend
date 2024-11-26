import { api } from "@/api/axios";
import { createContext, ReactNode } from "react";
import { redirect } from "react-router-dom";

interface IRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string
}

interface ILogin {
    email: string;
    password: string
}

interface AuthenticationContext {
    onSignup: (value: IRegister) => void;
    onLogin: (value: ILogin) => void;
}

interface AuthenticationProps {
    children: ReactNode;
}

export const AuthenticationContext = createContext<AuthenticationContext>({} as AuthenticationContext)

export const AuthenticationProvider = ({ children }: AuthenticationProps) => {

    const onSignup = async (dataRegister: IRegister) => {
        try {
            await api.post('/users/signup', dataRegister);
            window.location.href = "/login"
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    const onLogin = async (dataLogin: ILogin) => {
        try {
            const response = await api.post('/auth/signin', dataLogin);
            const token = response.data.access_token;
            localStorage.setItem("accessToken", token);
            redirect("/");
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    return (
        <AuthenticationContext.Provider value={{ onSignup, onLogin }}>{children}</AuthenticationContext.Provider>
    )
}