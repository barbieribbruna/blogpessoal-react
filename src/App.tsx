import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";    // Gerenciamento de rotas

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <div className="min-h-screen flex flex-col">

            <AuthProvider>
                <BrowserRouter>
                    <Navbar />
                    <main className="flex-1">
                        <Routes>

                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />

                            {/* fallback opcional */}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>

        </div>
    );
}

export default App;