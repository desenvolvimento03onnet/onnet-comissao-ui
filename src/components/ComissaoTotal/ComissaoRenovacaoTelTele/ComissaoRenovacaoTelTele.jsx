import stylesRenovacaoTelTele from './ComissaoRenovacaoTelTele.module.css';
import { useState } from 'react';

export default function inputRenovacaoTelTele() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoTelTele.DivRenovacaoTelTele}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoTelTele" className={stylesRenovacaoTelTele.InputRenovacaoTelTele} type="number" placeholder='Digite o valor da Telefonia' />
    </div>
  );
}