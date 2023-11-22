import stylesRenovacaoRecorrenteFrente from './ComissaoRenovacaoRecorrenteFrente.module.css';
import { useState } from 'react';

export default function inputNroSMS() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoRecorrenteFrente.DivRenovacaoRecorrenteFrente}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoRecorrenteFrente" className={stylesRenovacaoRecorrenteFrente.InputRenovacaoRecorrenteFrente} type="number" placeholder='Digite o valor Recorrente' />
    </div>
  );
}