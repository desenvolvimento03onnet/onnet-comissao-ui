import { Link } from 'react-router-dom';
import style from './NavBarResumido.module.css'

export default function NavBarResumido(){
    return (
        <div className={style.Cards}>
             <Link to="/PageSMS" className={style.Card}>
                <div>
                    Consulta SMS
                </div>
            </Link>
            <Link to="/PageQntContratos" className={style.Card}>
                <div>
                    Quantidade de Contratos Por Data de Vencimento
                </div>
            </Link>
            <Link to="/PageQntContratosAtivos" className={style.Card}>
                <div>
                    Quantidade de Contratos Ativos
                </div>
            </Link>
            <Link to="/PageClientesPorCaixa" className={style.Card}>
                <div>
                    Clientes Por Caixa
                </div>
            </Link>
        </div>
    );
}