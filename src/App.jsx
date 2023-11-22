import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageSMS from "./pages/SMS/pageSMS";
import NavBar from "./pages/NavBar/NavBar";
import NavBarResumido from "./pages/NavBarResumido/NavBarResumido";
import Validacao from "./pages/Validacao/Validacao"
import PageVencimento from "./pages/Vencimento/pageVencimento";
import PageAtivos from "./pages/Ativos/pageAtivos";
import PageCaixa from "./pages/Caixa/pageCaixa";
import PageComissaoTotal from "./pages/ComissaoTotal/pageComissaoTotal";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Validacao} />
        <Route path="/Navbar" Component={NavBar} />
        <Route path="/NavbarResumido" Component={NavBarResumido} />
        <Route path="/PageSMS" Component={PageSMS} />
        <Route path="/PageVencimento" Component={PageVencimento} />
        <Route path="/PageQntContratosAtivos" Component={PageAtivos} />
        <Route path="/PageClientesPorCaixa" Component={PageCaixa} />
        <Route path="/PageComissaoTotal" Component={PageComissaoTotal} />
      </Routes>
    </Router>
  );
}

export default App;
