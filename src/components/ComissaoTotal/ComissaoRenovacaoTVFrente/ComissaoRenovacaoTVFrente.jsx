import stylesRenovacaoTVFrente from './ComissaoRenovacaoTVFrente.module.css';
import { useState } from 'react';

export default function inputRenovacaoTVFrente() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoTVFrente.DivRenovacaoTVFrente}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoTVFrente" className={stylesRenovacaoTVFrente.InputRenovacaoTVFrente} type="number" placeholder='Digite o valor da TV' />
    </div>
  );
}