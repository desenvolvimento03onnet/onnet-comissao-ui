import stylesVoltar from './Voltar.module.css';
import { Link } from 'react-router-dom';

export default function ButtonVoltar() {
  if(sessionStorage.getItem(0).includes('@onnetmais.com.br')){
    return (
      <div className={stylesVoltar.DivVoltar}>
        <Link to="/Navbar" className={stylesVoltar.ButtonVoltar}>Voltar</Link>
      </div>
    );
  }
  if(sessionStorage.getItem(0).includes('@gmail.com')){
    return (
      <div className={stylesVoltar.DivVoltar}>
        <Link to="/NavbarResumido" className={stylesVoltar.ButtonVoltar}>Voltar</Link>
      </div>
    );
  }
  
}