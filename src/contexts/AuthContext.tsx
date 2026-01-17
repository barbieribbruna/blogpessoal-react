import { createContext, type ReactNode, useState } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

// DEFINE TIPOS
interface AuthContextProps {
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

// CRIA CONTEXTO
export const AuthContext = createContext({} as AuthContextProps);

// DEFINE O PROVEDOR
export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    // FUNÇÃO AUTENTICAR USUÁRIO (handleLogin)
    async function handleLogin(usuarioLogin: UsuarioLogin): Promise<void> {
        setIsLoading(true);
        try {
            await login("/usuarios/logar", usuarioLogin, setUsuario);
            alert("O usuário foi autenticado com sucesso!");
        } catch (error) {
            alert("Os dados do usuário estão inconsistentes!");
        } finally {
            setIsLoading(false);
        }
    }

    // FUNÇÃO LOGOUT DO USUÁRIO (handleLogout)
    function handleLogout(): void {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: "",
        });
    }

    // RENDERIZAÇÃO DO PROVEDOR
    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
