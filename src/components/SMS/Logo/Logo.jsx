import style from './Logo.module.css';
import { useEffect } from 'react';

function animacaoOlhos(){
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
  }

export default function imgLogo() {
    useEffect(() => {
        animacaoOlhos()
      }, []);
  return (
            <div className={style.Main}>
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
            </div>
  );
}