import { Route, Routes, Navigate } from "react-router-dom";    // Gerenciamento de rotas

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* NAVBAR - MENU DE NAVEGAÇÃO */}
            <Navbar />

            {/* CONTEÚDO DINÂMICO */}
            <main className="flex-1">
                <Routes>
                    {/* rota inicial */}
                    <Route path="/" element={<Home />} />

                    {/* home explícito */}
                    <Route path="/home" element={<Home />} />

                    {/* cadastro */}
                    <Route path="/cadastro" element={<Cadastro />} />

                    {/* fallback opcional */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>

            {/* FOOTER */}
            <Footer />

        </div>
    );
}

export default App;