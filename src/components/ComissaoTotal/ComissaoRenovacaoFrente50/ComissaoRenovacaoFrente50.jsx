import stylesRenovacaoFrente50 from './ComissaoRenovacaoFrente50.module.css';
import { useState } from 'react';

export default function inputRenovacaoFrente50() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoFrente50.DivRenovacaoFrente50}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoFrente50" className={stylesRenovacaoFrente50.InputRenovacaoFrente50} type="number" placeholder='Digite o valor do Upgrade' />
    </div>
  );
}