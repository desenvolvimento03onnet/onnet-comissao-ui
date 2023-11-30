import style from './Button.module.css'
import { Link } from 'react-router-dom';

export default function ButtonValidacao(){
    const handleClick = (e) => {
        e.preventDefault();
        var email = document.getElementById("InputEmail").value;
        if(email == ''){
            alert("Preencha o campo com o seu e-mail");
        }else{
            if(!email.includes('@onnetmais.com.br') && !email.includes('@gmail.com')){
                alert("E-mail não reconhecido, por favor, verifique se não há algo errado!");
            }else{
                sessionStorage.setItem(0,email);
                if(email.includes('@onnetmais.com.br')){
                    window.location.href="/NavBar";
                    var resultado = document.getElementById("DivGeral").innerHTML = '<div class="'+style.DivCarregar+'"><div class="'+style.Carregar+'"></div></div>'
                    return resultado;
                } else if(email.includes('@gmail.com') && ( email.includes('vendas') || email.includes('televendas') || email.includes('estoque') || email.includes('desenvolvimento') || email.includes('crm') || email.includes('suporte') || email.includes('sac') || email.includes('retencao') || email.includes('cobranca') || email.includes('contabilidade') || email.includes('caixa') || email.includes('faturamento') || email.includes('financeiro') || email.includes('ativacao') || email.includes('expedicao') || email.includes('auditoria') || email.includes('servicos') || email.includes('rh') || email.includes('redes') || email.includes('pap') || email.includes('servicos'))){
                    window.location.href = '/NavbarResumido';
                } else {
                    alert("E-mail não reconhecido, por favor, verifique se não há algo errado!");
                }
            }
        }
      }
    return (
        <div className={style.DivValidacao}>
            <button onClick={handleClick} className={style.ButtonValidacao}>Validar</button>
        </div>
        
    );
}