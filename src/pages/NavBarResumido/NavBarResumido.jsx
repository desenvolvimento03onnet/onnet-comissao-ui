import { Link } from 'react-router-dom';
import style from './NavBarResumido.module.css';
import imgLogo from "../../assets/SMS/SMS.png";
import {useEffect, useState} from 'react';

export default function NavBarResumido(){
    const pupila = document.querySelector("#olho1");
    const pupila2 = document.querySelector("#olho2");
    document.addEventListener("mousemove", (e) => {
        let x = e.clientX * 50 / window.innerWidth - 50;
        let y = e.clientY * 50 / window.innerHeight - 50;
        
        pupila.style.left = x + "%";
        pupila.style.top = y + "%";

        pupila2.style.left = x + "%";
        pupila2.style.top = y + "%";
    });
    function mouseOver(){
        document.getElementById("labios").style.height = "50%";
        document.getElementById("labios").style.transition = "0.2s";
    }
    function mouseOut(){
        document.getElementById("labios").style.height = "5%";
    }
    return (
        <div className={style.Tela}>
            <div className={style.Main}>
                <div className={style.Esquerda}>
                    <Link to="/PageSMS" className={style.Card} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <div>
                            Consulta SMS
                        </div>
                    </Link>
                    <Link to="/PageVencimento" className={style.Card} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <div>
                            Quantidade de Contratos Por Data de Vencimento
                        </div>
                    </Link>
                </div>
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
                <div className={style.Direita}>
                    <Link to="/PageQntContratosAtivos" className={style.Card} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            <div>
                                Quantidade de Contratos Ativos
                            </div>
                    </Link>
                    <Link to="/PageClientesPorCaixa" className={style.Card} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <div>
                            Clientes Por Caixa
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}