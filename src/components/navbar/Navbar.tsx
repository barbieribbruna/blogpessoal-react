import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="w-full bg-[var(--azul-escuro)] border-b-[6px] border-[var(--azul-vivo)]">
            <div className="w-full px-10 py-6 flex items-center justify-between">   {/* container pai */}

                {/* Bloco ESQUERDO */}
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

                {/* Bloco DIREITO */}
                <nav className="flex items-center gap-8 text-[1.6rem] md:text-[2.2rem] text-[var(--offwhite)] font-medium">

                    <button className="cursor-pointer px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors">
                        Publicações
                    </button>

                    <div className="h-10 border-r border-[var(--azul-claro)] opacity-70" aria-hidden="true" />    {/* divisor vertical */}

                    <button className="cursor-pointer px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors">
                        Temas
                    </button>

                    <div className="h-10 border-r border-[var(--azul-claro)] opacity-70" aria-hidden="true" />    {/* divisor vertical */}

                    <button className="cursor-pointer px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors">
                        Cadastrar tema
                    </button>

                    <div className="h-10 border-r border-[var(--azul-claro)] opacity-70" aria-hidden="true" />    {/* divisor vertical */}

                    <button className="cursor-pointer px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors">
                        Perfil
                    </button>

                    <div className="h-10 border-r border-[var(--azul-claro)] opacity-70" aria-hidden="true" />    {/* divisor vertical */}

                    <button className="cursor-pointer px-2 py-1 rounded hover:text-[var(--azul-claro)] transition-colors">
                        Sair
                    </button>
                </nav>

            </div>
        </header >
    );
}

export default Navbar;
