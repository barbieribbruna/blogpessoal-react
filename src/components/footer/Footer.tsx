import { LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";

function Footer() {
    const data = new Date().getFullYear();

    return (
        <footer className="w-full flex-shrink-0 bg-[var(--azul-escuro)] border-t-[6px] border-[var(--azul-vivo)]">
            <div className="w-full px-10 py-6">     {/* container pai = navbar */}
                <div className="max-w-6xl mx-auto flex items-center justify-between">   {/* container central */}
                    <div className="flex items-center gap-10">   {/* grupo: bloco esquerdo + divisor + bloco direito */}

                        {/* BLOCO ESQUERDO */}
                        <div className="flex flex-col gap-[0.2rem] leading-snug">
                            <span className="font-bold text-[1.8rem] text-[var(--offwhite)] flex items-center gap-2">
                                Blog Jurídico - Simplificando Direito <span>⚖️</span>
                            </span>

                            <span className="text-[1.6rem] text-[var(--azul-claro)]">
                                © {data} · Desenvolvido por Barbieri DevRoom
                            </span>
                        </div>

                        {/* DIVISOR VERTICAL */}
                        <div className="h-10 border-r border-[var(--azul-claro)] opacity-70" aria-hidden="true" />

                        {/* BLOCO DIREITO */}
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-bold text-[1.8rem] text-[var(--offwhite)] flex items-center gap-2">
                                Redes Sociais
                            </span>

                            <div className="flex items-center gap-2">
                                {/* LINKEDIN */}
                                <a
                                    href="https://www.linkedin.com/in/barbieribbruna/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-110 hover:opacity-80 cursor-pointer"
                                >
                                    <LinkedinLogoIcon
                                        size={40}
                                        weight="bold"
                                        color="var(--offwhite)"
                                    />
                                </a>

                                {/* GITHUB */}
                                <a
                                    href="https://github.com/barbieribbruna"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-110 hover:opacity-80 cursor-pointer"
                                >
                                    <GithubLogoIcon
                                        size={40}
                                        weight="bold"
                                        color="var(--offwhite)"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
