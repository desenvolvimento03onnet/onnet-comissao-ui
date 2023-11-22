import stylesRenovacaoTele4 from './ComissaoRenovacaoTele4.module.css';
import { useState } from 'react';

export default function inputRenovacaoTele4() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoTele4.DivRenovacaoTele4}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoTele4" className={stylesRenovacaoTele4.InputRenovacaoTele4} type="number" placeholder='Digite o valor do Upgrade' />
    </div>
  );
}