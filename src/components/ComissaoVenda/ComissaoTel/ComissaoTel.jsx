import stylesTel from './ComissaoTel.module.css';
import { useState } from 'react';

export default function inputComissaoTel() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesTel.DivComissaoTel}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoTel" className={stylesTel.InputComissaoTel} type="number" placeholder='Digite o valor da Telefonia' />
    </div>
  );
}