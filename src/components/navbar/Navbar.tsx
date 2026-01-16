import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="w-full bg-[var(--azul-escuro)] border-b-[6px] border-[var(--azul-vivo)]">
            <div className="w-full px-10 py-6 flex items-center justify-between">

                {/* BLOCO ESQUERDO */}
                <div className="flex flex-col gap-0 leading-snug">
                    <Link to="/home">
                        <span className="font-bold text-[2.2rem] md:text-[2.8rem] text-[var(--offwhite)]">
                            Simplificando Direito
                        </span>
                    </Link>

                    <span className="text-[1.4rem] md:text-[2.2rem] text-[var(--azul-claro)]">
                        Entenda seus direitos sem precisar de um dicionário
                    </span>
                </div>

                {/* BLOCO DIREITO */}
                <nav className="flex items-center gap-8 text-[1.6rem] md:text-[2.2rem] text-[var(--offwhite)] font-medium">

                    {/* LINKS DE CONTEÚDO */}
                    <Link
                        to="/home"
                        className="px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors"
                    >
                        Home
                    </Link>

                    <div className="h-10 border-r border-[var(--azul-claro)] opacity-70" aria-hidden="true" />

                    <Link
                        to="/postagens"
                        className="px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors"
                    >
                        Publicações
                    </Link>

                    <div className="h-10 border-r border-[var(--azul-claro)] opacity-70" aria-hidden="true" />

                    <Link
                        to="/temas"
                        className="px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors"
                    >
                        Temas
                    </Link>

                    <div className="h-10 border-r border-[var(--azul-claro)] opacity-70" aria-hidden="true" />

                    <Link
                        to="/cadastro-tema"
                        className="px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors"
                    >
                        Cadastrar tema
                    </Link>

                    {/* DIVISOR ENTRE CONTEÚDO E ACESSO */}
                    <div className="h-10 border-r border-[var(--azul-vivo)] opacity-90" aria-hidden="true" />

                    {/* LINKS DE ACESSO */}
                    <Link
                        to="/login"
                        className="px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors"
                    >
                        Entrar
                    </Link>

                    <Link
                        to="/cadastro"
                        className="px-4 py-2 rounded font-bold bg-[var(--azul-vivo)] text-white hover:opacity-90 transition-opacity"
                    >
                        Criar conta
                    </Link>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;
