import style from './Validacao.module.css'
import EmailValidacao from '../../components/Validacao/Email/Email';
import ButtonValidacao from '../../components/Validacao/Button/Button';
import Logo from '../../assets/Logo/Logo.gif'
import Beta from "../../components/Beta/Beta/Beta";


export default function Validacao(){
    
    sessionStorage.clear();
    return (
        <div className={style.DivGeral} id='DivGeral'>
            <div className={style.DivImagem}>
                <img src={Logo} alt="" />
            </div>
            <div className={style.DivFormulario}>
                <EmailValidacao />
                <ButtonValidacao />
            </div>
            <Beta />
        </div>
    );
}