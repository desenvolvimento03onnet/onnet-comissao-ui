import { Link } from 'react-router-dom';
import style from './NavBar.module.css'

export default function NavBar(){
    return (
        <div className={style.Cards}>
             <Link to="/PageSMS" className={style.Card}>
                <div>
                    Consulta SMS
                </div>
            </Link>
            <Link to="/PageVencimento" className={style.Card}>
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
            <Link to="/PageComissaoTotal" className={style.Card}>
                <div>
                    Comissão Total
                </div>
            </Link>
            <Link to="/PageComissaoVenda" className={style.Card}>
                <div>
                    Comissão Venda
                </div>
            </Link>
            <Link to="/PageComissaoRenovacao" className={style.Card}>
                <div>
                    Comissão Renovação
                </div>
            </Link>
        </div>
    );
}