import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [confirmarSenha, setConfirmarSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/')
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {

            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                alert('Usuário cadastrado com sucesso!')
            } catch (error) {
                alert('Erro ao cadastrar o usuário!')
            }
        } else {
            alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
            setUsuario({ ...usuario, senha: '' })
            setConfirmarSenha('')
        }

        setIsLoading(false)
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center font-bold bg-[var(--azul-bemclaro)]">
                {/* LADO ESQUERDO - IMAGEM (≥ 1024px) */}
                <div
                    className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"
                    aria-hidden="true"
                ></div>

                {/* LADO DIREITO - FORM */}
                <div className="w-full lg:w-[50%] lg:h-[70%] flex items-center justify-center px-2 py-10">
                    <form className="w-full p-10 lg:p-10 bg-white/60 backdrop-blur-sm rounded-[1.8rem] shadow-sm">
                        <header className="flex flex-col gap-2">
                            <h2 className="text-[var(--azul-escuro)] text-[4.8rem] leading-tight">
                                Cadastrar
                            </h2>
                            <p className="text-[2.4rem] text-justify font-medium text-slate-600 leading-tight mb-3">
                                Crie sua conta para publicar e acompanhar conteúdos do blog.
                            </p>
                        </header>

                        {/* NOME */}
                        <div className="flex flex-col w-full gap-1">
                            <label
                                htmlFor="nome"
                                className="text-[var(--azul-escuro)] text-[2.2rem]"
                            >
                                Nome
                            </label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Seu nome completo"
                                className="border-2 border-slate-300 rounded-xl p-5 text-[var(--azul-escuro)] text-[1.8rem] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[var(--azul-vivo)] focus:ring-2 focus:ring-[var(--azul-vivo)]/40"
                            />
                        </div>

                        {/* USUÁRIO (email/usuario) */}
                        <div className="flex flex-col w-full gap-1">
                            <label
                                htmlFor="usuario"
                                className="text-[var(--azul-escuro)] text-[2.2rem]"
                            >
                                Usuário
                            </label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Seu usuário ou e-mail"
                                className="border-2 border-slate-300 rounded-xl p-5 text-[var(--azul-escuro)] text-[1.8rem] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[var(--azul-vivo)] focus:ring-2 focus:ring-[var(--azul-vivo)]/40"
                            />
                        </div>

                        {/* FOTO */}
                        <div className="flex flex-col w-full gap-1">
                            <label
                                htmlFor="foto"
                                className="text-[var(--azul-escuro)] text-[2.2rem]"
                            >
                                Foto
                            </label>
                            <input
                                type="text"
                                id="foto"
                                name="foto"
                                placeholder="Link da sua foto (opcional)"
                                className="border-2 border-slate-300 rounded-xl p-5 text-[var(--azul-escuro)] text-[1.8rem] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[var(--azul-vivo)] focus:ring-2 focus:ring-[var(--azul-vivo)]/40"
                            />
                        </div>

                        {/* SENHA */}
                        <div className="flex flex-col w-full gap-1">
                            <label
                                htmlFor="senha"
                                className="text-[var(--azul-escuro)] text-[2.2rem]"
                            >
                                Senha
                            </label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Crie uma senha"
                                className="border-2 border-slate-300 rounded-xl p-5 text-[var(--azul-escuro)] text-[1.8rem] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[var(--azul-vivo)] focus:ring-2 focus:ring-[var(--azul-vivo)]/40"
                            />
                        </div>

                        {/* CONFIRMAR SENHA */}
                        <div className="flex flex-col w-full gap-1">
                            <label
                                htmlFor="confirmarSenha"
                                className="text-[var(--azul-escuro)] text-[2.2rem]"
                            >
                                Confirmar Senha
                            </label>
                            <input
                                type="password"
                                id="confirmarSenha"
                                name="confirmarSenha"
                                placeholder="Repita a senha"
                                className="border-2 border-slate-300 rounded-xl p-5 text-[var(--azul-escuro)] text-[1.8rem] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[var(--azul-vivo)] focus:ring-2 focus:ring-[var(--azul-vivo)]/40"
                            />
                        </div>

                        {/* BOTÕES */}
                        <div className="flex justify-around w-full gap-4 pt-2">
                            <button
                                type="reset"
                                className="rounded-xl text-white text-[1.8rem] bg-red-500 hover:bg-red-400 w-1/2 py-3 transition-colors cursor-pointer"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="rounded-xl text-white text-[1.8rem] bg-[var(--azul-vivo)] hover:opacity-70 w-1/2 py-3 flex justify-center transition-opacity cursor-pointer"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Cadastro;
