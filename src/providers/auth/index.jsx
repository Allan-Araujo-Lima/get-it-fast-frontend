import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../api/axios";
import { encryptToken, removeToken } from "../../utils/script";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [profile_data, setUser] = useState(null);

    const onSetCurrentUser = (_profile_data) => {
        setUser(_profile_data);
    };
    const onRemoveCurrentUser = () => {
        setUser(null);
    };

    const onSignIn = async (values) => {
        try {
            const { data } = await api.post("/auth/signin", values);
            await encryptToken(data.access_token);
            toast.success("Login realizado")
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.request.response) {
                    if (
                        err.response?.status &&
                        (err.response?.status === 400 || err.response?.status === 404)
                    ) {
                        toast.error("Senha ou email errado.");
                    }
                }
            }
        }
    };

    const onDeleteAccount = async () => { };

    const onSignOut = () => {
        removeToken();
        document.location.reload();
    };

    return (
        <AuthContext.Provider
            value={{
                profile_data: profile_data
                    ? {
                        email: profile_data.email,
                        profile_data_type: profile_data.profile_data_type,
                    }
                    : undefined,
                onSignIn,
                onSignOut,
                onDeleteAccount,
                onSetCurrentUser,
                onRemoveCurrentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
