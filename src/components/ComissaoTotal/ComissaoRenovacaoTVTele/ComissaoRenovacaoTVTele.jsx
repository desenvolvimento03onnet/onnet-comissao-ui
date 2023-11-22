import stylesRenovacaoTVTele from './ComissaoRenovacaoTVTele.module.css';
import { useState } from 'react';

export default function inputRenovacaoTVTele() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoTVTele.DivRenovacaoTVTele}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoTVTele" className={stylesRenovacaoTVTele.InputRenovacaoTVTele} type="number" placeholder='Digite o valor da TV' />
    </div>
  );
}