import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center font-bold bg-[var(--azul-bemclaro)]">

                {/* FORM (lado esquerdo) */}
                <div className="w-full lg:w-[50%] lg:h-[70%] flex items-center justify-center px-2 py-10">
                    <form className="w-full p-10 lg:p-10 bg-white/60 backdrop-blur-sm rounded-[1.8rem] shadow-xl">
                        <header className="flex flex-col gap-2">
                            <h2 className="text-[var(--azul-escuro)] text-[4.8rem] leading-tight">
                                Entrar
                            </h2>

                            <p className="text-[2.4rem] text-justify font-medium text-slate-600 leading-tight mb-3">
                                Acesse sua conta para acompanhar e publicar conteúdos no blog.
                            </p>
                        </header>

                        {/* USUÁRIO */}
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
                                placeholder="Sua senha"
                                className="border-2 border-slate-300 rounded-xl p-5 text-[var(--azul-escuro)] text-[1.8rem] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[var(--azul-vivo)] focus:ring-2 focus:ring-[var(--azul-vivo)]/40"
                            />
                        </div>

                        {/* BOTÃO */}
                        <button
                            type="submit"
                            className="rounded-xl text-white text-[1.8rem] bg-[var(--azul-vivo)] hover:opacity-70 w-2/2 py-3 flex justify-center transition-opacity cursor-pointer"
                        >
                            <span>Entrar</span>
                        </button>

                        <hr className="border-slate-300 w-full" />

                        <p className="text-slate-700 text-[1.8rem] font-medium">
                            Ainda não tem uma conta?{" "}
                            <Link
                                to="/cadastro"
                                className="text-[var(--azul-escuro)] text-[1.8rem] hover:underline"
                            >
                                Cadastre-se
                            </Link>
                        </p>
                    </form>
                </div>

                {/* IMAGEM (lado direito - aparece apenas no lg+) */}
                <div
                    className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"
                    aria-hidden="true"
                ></div>
            </div>
        </>
    );
}

export default Login;
