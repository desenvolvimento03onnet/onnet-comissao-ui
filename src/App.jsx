import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageSMS from "./pages/SMS/pageSMS";
import NavBar from "./pages/NavBar/NavBar";
import NavBarResumido from "./pages/NavBarResumido/NavBarResumido";
import Validacao from "./pages/Validacao/Validacao"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Validacao} />
        <Route path="/Navbar" Component={NavBar} />
        <Route path="/NavbarResumido" Component={NavBarResumido} />
        <Route path="/PageSMS" Component={PageSMS} />
      </Routes>
    </Router>
  );
}

export default App;
