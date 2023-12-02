import stylesTelTele from './ComissaoTelTele.module.css';
import { useState } from 'react';

export default function inputComissaoTelTele() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesTelTele.DivComissaoTelTele}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoTelTele" className={stylesTelTele.InputComissaoTelTele} type="number" placeholder='Digite o valor da Telefonia' />
    </div>
  );
}