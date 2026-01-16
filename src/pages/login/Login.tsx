import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center font-bold bg-[var(--offwhite)]">

                {/* FORM (lado esquerdo) */}
                <div className="w-full flex items-center justify-center px-6 py-10">
                    <form className="w-full max-w-xl flex flex-col gap-5 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-10 lg:p-12">
                        <header className="flex flex-col gap-3 mb-2">
                            <h2 className="text-[var(--azul-escuro)] text-5xl leading-tight">
                                Entrar
                            </h2>

                            <p className="text-base font-medium text-slate-600 leading-snug">
                                Acesse sua conta para acompanhar e publicar conteúdos no blog.
                            </p>
                        </header>

                        {/* USUÁRIO */}
                        <div className="flex flex-col w-full gap-1">
                            <label
                                htmlFor="usuario"
                                className="text-[var(--azul-escuro)] text-lg"
                            >
                                Usuário
                            </label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Seu usuário ou e-mail"
                                className="border-2 border-slate-300 rounded-xl p-4 text-[var(--azul-escuro)] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[var(--azul-vivo)] focus:ring-2 focus:ring-[var(--azul-vivo)]/40"
                            />
                        </div>

                        {/* SENHA */}
                        <div className="flex flex-col w-full gap-1">
                            <label
                                htmlFor="senha"
                                className="text-[var(--azul-escuro)] text-lg"
                            >
                                Senha
                            </label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Sua senha"
                                className="border-2 border-slate-300 rounded-xl p-4 text-[var(--azul-escuro)] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[var(--azul-vivo)] focus:ring-2 focus:ring-[var(--azul-vivo)]/40"
                            />
                        </div>

                        {/* BOTÃO */}
                        <button
                            type="submit"
                            className="rounded-xl bg-[var(--azul-vivo)] flex justify-center hover:opacity-90 text-white w-full sm:w-1/2 py-3 transition-opacity"
                        >
                            <span>Entrar</span>
                        </button>

                        <hr className="border-slate-300 w-full" />

                        <p className="text-slate-700 font-medium">
                            Ainda não tem uma conta?{" "}
                            <Link
                                to="/cadastro"
                                className="text-[var(--azul-escuro)] hover:underline"
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
