import homeImage from "../../assets/img/img-page-home.jpg";

function Home() {
    const cards = [
        {
            titulo: "Consumidor",
            texto: "Compras online, golpes digitais e problemas com serviços do dia a dia.",
        },
        {
            titulo: "Trabalho",
            texto: "Contratação, rescisão, home office, jornada e direitos trabalhistas.",
        },
        {
            titulo: "Família",
            texto: "Guarda, pensão, divórcio, acordos e organização da vida familiar.",
        },
        {
            titulo: "Contratos & Finanças",
            texto: "Financiamentos, contratos, empréstimos e documentos que você assina.",
        },
    ];

    return (
        <main className="w-full flex flex-col flex-1">
            <div className="w-full px-7.5 py-7.5 flex flex-col">
                <section className="w-full flex flex-col gap-2">

                    {/* Hero */}
                    <div className="relative rounded-[1.8rem] overflow-hidden h-[40vh] min-h-[480px] shadow-[var(--sombra-profunda)]">
                        <img
                            src={homeImage}
                            alt="Imagem de capa"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(120deg,#011640fa,#0a2140d9,#0d4373a6)]" />

                        <div className="absolute top-1/2 left-10 -translate-y-1/2 max-w-[100%] text-[var(--offwhite)] flex flex-col gap-6">
                            <h1 className="text-[4rem] font-bold leading-[1.1] text-[var(--offwhite)]">
                                Direito claro, inclusivo e ao seu alcance
                            </h1>

                            <p className="text-[2rem] text-[#E3E5DD] max-w-[60%] leading-[1.3] text-justify">
                                Conteúdos práticos sobre os principais temas jurídicos do seu dia a
                                dia e explicados sem juridiquês.
                            </p>

                            <div className="flex items-center gap-4 mt-15">
                                <button className="rounded-full bg-[var(--azul-claro)] text-[var(--azul-escuro)] py-[1.5rem] px-[2.2rem] text-[1.5rem] font-bold shadow-[0_14px_32px_#0000001a] cursor-pointer text-base tracking-[0.05em] border-0">
                                    Ver artigos
                                </button>
                            </div>
                        </div>

                        <div className="absolute right-10 bottom-3 w-[48%] grid grid-cols-4 gap-4 bg-white/50 rounded-[1.8rem] shadow-[var(--sombra-profunda)] p-[1rem] border-[4px] border-[var(--azul-petro)]">
                            {cards.map((card, index) => (
                                <div
                                    key={card.titulo}
                                    className={`flex flex-col justify-between gap-[0.5rem] py-[0.2rem] px-[0.6rem] ${index !== 3 ? "border-r border-[var(--azul-claro)]" : ""
                                        }`}
                                >
                                    <div className="flex flex-col gap-[0.4rem]">
                                        <span className="text-[2.5rem] font-bold text-[var(--azul-escuro)] leading-tight">
                                            {card.titulo}
                                        </span>

                                        <span className="text-[1.6rem] text-[var(--azul-petro)] leading-[1.3] text-justify">
                                            {card.texto}
                                        </span>
                                    </div>

                                    <span className="text-[1.6rem] text-[var(--azul-vivo)] font-semibold cursor-pointer mt-1">
                                        Ver conteúdos
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Seção Institucional */}
                    <section className="mt-[2rem] grid grid-cols-[2.1fr_1.6fr] gap-[2rem] items-start text-justify max-w-[100%]">
                        <div>
                            <h2 className="text-[2.8rem] font-bold text-[var(--azul-escuro)] mb-2">
                                Seu chefe pode olhar seu WhatsApp pessoal?
                            </h2>

                            <p className="text-[2.3rem] text-[var(--azul-petro)] leading-[1.4] mb-[0.9rem]">
                                Não. Mesmo que o celular esteja conectado ao Wi-Fi da empresa ou seja usado durante o expediente,
                                mensagens pessoais são privadas. O empregador não pode acessar conversas, fotos ou áudios sem autorização.
                                Privacidade não acaba no trabalho.
                            </p>

                            <p className="text-[2.3rem] font-bold text-[var(--azul-petro)] leading-[1.4]">
                                Quer conhecer outros direitos do dia a dia?
                            </p>
                            <p className="text-[2.3rem] text-[var(--azul-petro)] leading-[1.4]">
                                Aqui explicamos o Direito de forma simples, levando em conta a realidade atual:
                                golpes na internet, contratos feitos online, mudanças no trabalho e novas formas de consumir e se relacionar.
                            </p>
                            <p className="text-[2.3rem] text-[var(--azul-petro)] leading-[1.4]">
                                Acompanhe o blog e fique informado(a).
                            </p>
                        </div>

                        <div className="justify-self-center bg-white py-[2rem] px-[2rem] rounded-[1.8rem] shadow-[0_14px_38px_var(--sombra-leve)] flex flex-col gap-2 border border-[var(--azul-claro)] max-w-[60%]">
                            <h3 className="text-[2.8rem] font-bold text-[var(--azul-escuro)] text-center">
                                Temas em destaque
                            </h3>

                            <ul className="list-none p-2 m-2 text-[2.3rem] text-[var(--azul-petro)] flex flex-col gap-0">
                                <li>• Golpes digitais e segurança jurídica.</li>
                                <li>• O que observar em contratos digitais.</li>
                                <li>• Direitos no teletrabalho e home office.</li>
                                <li>• Organização de documentos essenciais.</li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </main>

    );
}

export default Home;