import stylesRenovacaoTele3 from './ComissaoRenovacaoTele3.module.css';
import { useState } from 'react';

export default function inputRenovacaoTele3() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoTele3.DivRenovacaoTele3}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoTele3" className={stylesRenovacaoTele3.InputRenovacaoTele3} type="number" placeholder='Digite o valor da Renovação' />
    </div>
  );
}