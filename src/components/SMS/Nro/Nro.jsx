import stylesNro from './Nro.module.css';
import { useState } from 'react';

export default function inputNroSMS() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesNro.DivNro}>
      <input value={valorInput} onChange={handleChange} id="InputNro" className={stylesNro.InputNro} type="number" placeholder='Digite o Nro de Telefone do Cliente' />
    </div>
  );
}