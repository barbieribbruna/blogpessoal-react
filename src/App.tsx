import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="min-h-screen flex flex-col">

                    {/* NAVBAR - MENU DE NAVEGAÇÃO */}
                    <Navbar />

                    {/* HOME */}
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />}
                            />
                        </Routes>
                    </main>

                    {/* FOOTER */}
                    <Footer />

                </div>
            </BrowserRouter>
        </>
    )
}

export default App
