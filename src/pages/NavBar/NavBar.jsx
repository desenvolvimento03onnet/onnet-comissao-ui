import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import imgLogo from "../../assets/SMS/SMS.png";

export default function NavBar(){
    const pupila = document.querySelector("#olho1");
    const pupila2 = document.querySelector("#olho2");
    document.addEventListener("mousemove", (e) => {
        let x = e.clientX * 50 / window.innerWidth - 50;
        let y = e.clientY * 50 / window.innerHeight - 50;
        
        pupila.style.left = x + "%";
        pupila.style.top = y + "%";

        pupila2.style.left = x + "%";
        pupila2.style.top = y + "%";
    })
    return (
        <div className={style.Tela}>
            <div className={style.Imagem}>
                <div className={style.Container}>
                    <div className={style.Espaco}></div>
                    <div className={style.Testa}></div>
                    <div className={style.Cabelo}>
                        <div className={style.Fio}></div>
                        <div className={style.Fio}></div>
                        <div className={style.Fio}></div>
                        <div className={style.Fio}></div>
                        <div className={style.Fio}></div>
                    </div>
                    <div className={style.LogoDiv}>
                        <img src={imgLogo} className={style.Logo} />
                    </div>
                    <div className={style.Sobrancelhas}>
                        <div className={style.Sobrancelha}></div>
                        <div className={style.Sobrancelha}></div>
                    </div>
                    <div className={style.Olhos}>
                        <div className={style.Olho}>
                            <div className={style.Pupila} id="olho1">
                                <div className={style.PupilaInterior}></div>
                                <div className={style.Branco}></div>
                            </div>
                        </div>
                        <div className={style.Olho}>
                            <div className={style.Pupila} id="olho2">
                                <div className={style.PupilaInterior}></div>
                                <div className={style.Branco}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.Boca}>
                        <div className={style.Labios} id="labios">
                            <div className={style.Dentes}></div>
                            <div className={style.Garganta}></div>
                            <div className={style.Lingua}></div>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    );
}