import axios from 'axios';

// Criação da instância com a URL base do backend
const api = axios.create({
    baseURL: "http://localhost:3001" // Correção para Vite: use 'VITE_' como prefixo
});

// Função para obter todos os usuários
export const GetAllUsers = async () => {
    try {
        const response = await api.get('/users');
        console.log(response);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
};
