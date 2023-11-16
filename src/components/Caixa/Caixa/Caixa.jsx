import stylesCaixa from './Caixa.module.css';
import { useState } from 'react';

export default function inputCaixa() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };
  
  return (
    <div className={stylesCaixa.DivCaixa}>
      <input value={valorInput} onChange={handleChange} id="InputCaixa" className={stylesCaixa.InputCaixa} type="text" placeholder='Digite a caixa' />
    </div>
  );
}