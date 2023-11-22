import stylesRenovacaoTelFrente from './ComissaoRenovacaoTelFrente.module.css';
import { useState } from 'react';

export default function inputRenovacaoTelFrente() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoTelFrente.DivRenovacaoTelFrente}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoTelFrente" className={stylesRenovacaoTelFrente.InputRenovacaoTelFrente} type="number" placeholder='Digite o valor da Telefonia' />
    </div>
  );
}