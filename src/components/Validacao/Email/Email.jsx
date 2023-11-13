import style from './Email.module.css'
import { useState } from 'react';


export default function EmailValidacao(){
    const [valorInput, setValorInput] = useState('');

    const handleChange = (event) => {
        setValorInput(event.target.value);
    };
    return (
        <div className={style.DivValidacao}>
            <input value={valorInput} onChange={handleChange} id='InputEmail' className={style.InputValidacao} type="email" placeholder='Insira Seu E-mail Aqui'/>
        </div>
        
    );
}