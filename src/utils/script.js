import CryptoJS from "crypto-js";
import { jwtDecode } from "jwt-decode";

const encryptToken = async (value) => {
    try {
        const encryptedValue = await encryptValue(value);
        console.log(String(import.meta.env.VITE_LOCAL_TOKEN))
        localStorage.setItem(
            String(import.meta.env.VITE_LOCAL_TOKEN),
            encryptedValue.toString(),
        );
    } catch (error) {
        console.error("Erro ao criptografar o token:", error);
    }
};

const encryptValue = (value) => {
    return new Promise((resolve, reject) => {
        try {
            const encrypted = CryptoJS.AES.encrypt(
                value,
                String(import.meta.env.VITE_ENCRYPT_TOKEN),
            ).toString();
            resolve(encrypted);
        } catch (error) {
            reject(error);
        }
    });
};

const decodeToken = () => {
    const token_local = localStorage.getItem(
        String(import.meta.env.VITE_LOCAL_TOKEN),
    );

    if (typeof token_local === "string") {
        const bytes = CryptoJS.AES.decrypt(
            token_local,
            String(import.meta.env.VITE_ENCRYPT_TOKEN),
        );
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    return "";
};

const decodeTokenAsync = () => {
    return new Promise((resolve) => {
        const token_local = localStorage.getItem(
            String(import.meta.env.VITE_LOCAL_TOKEN),
        );
        if (typeof token_local === "string" && typeof token_local === "string") {
            const bytes = CryptoJS.AES.decrypt(
                token_local,
                String(import.meta.env.VITE_ENCRYPT_TOKEN),
            );

            resolve(bytes.toString(CryptoJS.enc.Utf8));
        }
    });
};

const decodeHash = () => {
    const localToken = localStorage.getItem(
        String(import.meta.env.VITE_LOCAL_TOKEN),
    );

    if (!localToken) {
        return false;
    }

    const data = jwtDecode(decodeToken())

    const { email, exp, profile_data_type } = data;

    return { email, exp, profile_data_type };
};

const removeToken = () => {
    localStorage.removeItem(String(import.meta.env.VITE_LOCAL_TOKEN));
};

export { encryptToken, decodeToken, decodeTokenAsync, decodeHash, removeToken };
