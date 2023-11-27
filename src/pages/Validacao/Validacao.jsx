import style from './Validacao.module.css'
import EmailValidacao from '../../components/Validacao/Email/Email';
import ButtonValidacao from '../../components/Validacao/Button/Button';

export default function Validacao(){
    sessionStorage.clear();
    return (
        <div>
            <EmailValidacao />
            <ButtonValidacao />
        </div>
    );
}