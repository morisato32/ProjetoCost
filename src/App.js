import { Routes, BrowserRouter, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Projetos from "./components/pages/Projetos";
import Contato from "./components/pages/Contato";
import Empresa from "./components/pages/Empresa";
import NovoProjeto from "./components/pages/NovoProjeto";

import Footer from "./components/pages/layout/Footer";
import NavBar from "./components/pages/layout/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Empresa" element={<Empresa />} />
          <Route path="/NovoProjeto" element={<NovoProjeto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
