import { useContext } from "react";
import { AuthenticationContext } from "@/context/authentication";

export const useAuth = () => {
    const context = useContext(AuthenticationContext);

    if (context === undefined)
        throw new Error("useAuth must be used within a AuthProvider");

    return context;
};