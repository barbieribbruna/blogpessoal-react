import homeImage from "../../assets/img/img-page-home.jpg";

// =========================
//  Componente Home
// =========================
function Home() {
    return (
        <>
            {/* =========================================================
                HEADER (barra superior com título do blog + menu)
               ========================================================= */}
            <header
                style={{
                    width: "100%",
                    backgroundColor: "var(--azul-escuro)",
                    borderBottom: "3px solid var(--azul-vivo)",
                }}
            >
                {/* CONTAINER DO HEADER (centraliza conteúdo na largura máxima) */}
                <div
                    style={{
                        width: "100%",          // ocupa toda a tela
                        padding: "1.25rem 3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* BLOCO ESQUERDO: TÍTULO DO BLOG */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            lineHeight: 1.1,
                            gap: "0.3rem",
                        }}
                    >
                        {/* NOME DO BLOG */}
                        <span
                            style={{
                                fontWeight: 700,
                                fontSize: "1.8rem",
                                color: "var(--offwhite)",
                            }}
                        >
                            Simplificando Direito
                        </span>

                        {/* SUBTÍTULO DO BLOG */}
                        <span
                            style={{
                                fontSize: "1.2rem",
                                color: "var(--azul-claro)",
                            }}
                        >
                            Blog jurídico em linguagem clara
                        </span>
                    </div>

                    {/* BLOCO DIREITO: MENU DE NAVEGAÇÃO */}
                    <nav
                        style={{
                            display: "flex",
                            gap: "2rem",
                            fontSize: "1.5rem",
                            color: "var(--offwhite)",
                            fontWeight: 500,
                        }}
                    >
                        <span style={{ cursor: "pointer" }}>Início</span>
                        <span style={{ cursor: "pointer" }}>Sobre</span>
                        <span style={{ cursor: "pointer" }}>Áreas</span>
                        <span style={{ cursor: "pointer" }}>Contato</span>
                    </nav>
                </div>
            </header>

            {/* =========================================================
                MAIN (conteúdo principal da página)
               ========================================================= */}
            <main
                style={{
                    backgroundColor: "var(--azul-bemclaro)",
                    minHeight: "100vh",
                }}
            >
                {/* CONTAINER GERAL (centraliza todo o conteúdo da Home) */}
                <section
                    style={{
                        width: "100%",
                        padding: "3rem 3rem 5rem 3rem", // mais espaço
                    }}
                >
                    {/* =====================================================
                        HERO (imagem grande + texto principal + cards)
                       ===================================================== */}
                    <div
                        style={{
                            position: "relative",
                            borderRadius: "1.5rem",
                            overflow: "hidden",
                            height: "460px", // altura aumentada
                            backgroundImage: `
                                linear-gradient(
                                    120deg,
                                    #011640fa,
                                    #0a2140d9,
                                    #0d4373a6
                                ),
                                url(${homeImage})
                            `,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            boxShadow: "0 28px 80px var(--sombra-profunda)",
                        }}
                    >
                        {/* BLOCO DE TEXTO DO HERO (lado esquerdo) */}
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "4rem",
                                transform: "translateY(-50%)",
                                maxWidth: "600px", // mais largo
                                color: "var(--offwhite)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.25rem",
                            }}
                        >
                            {/* TÍTULO PRINCIPAL DO HERO */}
                            <h1
                                style={{
                                    fontSize: "2.8rem", // maior
                                    fontWeight: 700,
                                    lineHeight: 1.1,
                                    color: "var(--offwhite)",
                                }}
                            >
                                Direito claro, inclusivo e ao seu alcance
                            </h1>

                            {/* TEXTO EXPLICATIVO DO HERO */}
                            <p
                                style={{
                                    fontSize: "1.05rem",
                                    color: "#E3E5DD",
                                    lineHeight: 1.7,
                                }}
                            >
                                Conteúdos práticos sobre os principais temas jurídicos do
                                seu dia a dia e explicados sem juridiquês.
                            </p>

                            {/* BOTÃO + TEXTO DE APOIO */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    marginTop: "0.5rem",
                                }}
                            >
                                {/* BOTÃO "VER ARTIGOS" */}
                                <button
                                    style={{
                                        borderRadius: "9999px",
                                        backgroundColor: "var(--azul-claro)",
                                        color: "var(--azul-escuro)",
                                        padding: "0.9rem 2.2rem",
                                        fontWeight: 700,
                                        border: "none",
                                        boxShadow:
                                            "0 14px 32px #0000001a",
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    Ver artigos
                                </button>
                            </div>
                        </div>

                        {/* BLOCO DE CARDS (temas principais) */}
                        <div
                            style={{
                                justifySelf: "center",
                                position: "absolute",
                                left: "69%",
                                bottom: "0.8rem",
                                transform: "translateX(-50%)",
                                width: "60%",
                                maxWidth: "1120px",
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: "0.9rem",
                                backgroundColor: "rgba(255, 255, 255, 0.65)",
                                borderRadius: "1rem",
                                boxShadow: "0 14px 35px var(--sombra-media)",
                                padding: "1.2rem 1.2rem",
                                border: "3px solid var(--azul-petro)",
                                textAlign: "justify",

                            }}
                        >
                            {[
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
                                    texto: "Financiamentos, empréstimos, contratos e documentos que você assina.",
                                },
                            ].map((card, index) => (
                                <div
                                    key={card.titulo}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.4rem",
                                        padding: "0.45rem 0.4rem",
                                        borderRight:
                                            index !== 3
                                                ? "1px solid var(--azul-claro)"
                                                : "none",
                                    }}
                                >
                                    {/* TÍTULO DO CARD */}
                                    <span
                                        style={{
                                            fontSize: "1.2rem",
                                            fontWeight: 700,
                                            color: "var(--azul-escuro)",
                                        }}
                                    >
                                        {card.titulo}
                                    </span>

                                    {/* DESCRIÇÃO DO CARD */}
                                    <span
                                        style={{
                                            fontSize: "1rem",
                                            color: "var(--azul-petro)",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {card.texto}
                                    </span>

                                    {/* LINK DO CARD */}
                                    <span
                                        style={{
                                            fontSize: "1rem",
                                            color: "var(--azul-vivo)",
                                            cursor: "pointer",
                                            marginTop: "0.1rem",
                                        }}
                                    >
                                        Ver conteúdos
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* =====================================================
                        SEÇÃO INTRODUTÓRIA (texto + caixa “Temas em destaque”)
                       ===================================================== */}
                    <section
                        style={{
                            marginTop: "3.2rem",
                            display: "grid",
                            gridTemplateColumns: "2.1fr 1.6fr",
                            gap: "2.6rem",
                            alignItems: "flex-start",
                        }}
                    >
                        {/* COLUNA ESQUERDA: TEXTO INSTITUCIONAL */}
                        <div>
                            {/* TÍTULO DA SEÇÃO */}
                            <h2
                                style={{
                                    fontSize: "1.8rem",
                                    fontWeight: 700,
                                    color: "var(--azul-escuro)",
                                    marginBottom: "1rem",
                                }}
                            >
                                Conteúdo jurídico pensado para o mundo atual
                            </h2>

                            {/* PARÁGRAFOS EXPLICATIVOS */}
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    color: "var(--azul-petro)",
                                    lineHeight: 1.8,
                                    marginBottom: "0.9rem",
                                }}
                            >
                                Explicamos o Direito levando em conta os desafios da vida
                                digital: golpes online, contratos eletrônicos, mudanças no
                                trabalho e novas formas de consumo e relacionamento.
                            </p>

                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    color: "var(--azul-petro)",
                                    lineHeight: 1.8,
                                }}
                            >
                                Aqui você encontra informações para entender melhor seus
                                direitos e tomar decisões mais seguras, sempre com linguagem
                                acessível e foco na prática.
                            </p>
                        </div>

                        {/* COLUNA DIREITA: CAIXA "TEMAS EM DESTAQUE" */}
                        <div
                            style={{
                                justifySelf: "center",
                                backgroundColor: "#FFFFFF",
                                padding: "1.8rem 1.9rem",
                                borderRadius: "1rem",
                                boxShadow: "0 14px 38px var(--sombra-leve)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                border: "1px solid var(--azul-claro)",
                                maxWidth: "60%",
                            }}
                        >
                            {/* TÍTULO DA CAIXA */}
                            <h3
                                style={{
                                    fontSize: "1.8rem",
                                    fontWeight: 700,
                                    color: "var(--azul-escuro)",
                                }}
                            >
                                Temas em destaque
                            </h3>

                            {/* LISTA DE TEMAS */}
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    fontSize: "1.2rem",
                                    color: "var(--azul-petro)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                }}
                            >
                                <li>• Golpes digitais e segurança jurídica.</li>
                                <li>• O que observar em contratos digitais.</li>
                                <li>• Direitos no teletrabalho e home office.</li>
                                <li>• Organização de documentos essenciais.</li>
                            </ul>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default Home;