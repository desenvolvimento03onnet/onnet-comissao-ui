import stylesNro from './Nro.module.css';
import { useState } from 'react';

export default function inputNroSMS() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };
  
  return (
    <div className={stylesNro.DivNro}>
      <input value={valorInput} maxLength={8} onChange={handleChange} id="InputNro" className={stylesNro.InputNro} type="text" placeholder='Digite o Nro de Telefone do Cliente' />
    </div>
  );
}