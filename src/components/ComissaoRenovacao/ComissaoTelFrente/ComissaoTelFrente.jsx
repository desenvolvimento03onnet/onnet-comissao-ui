import stylesTelFrente from './ComissaoTelFrente.module.css';
import { useState } from 'react';

export default function inputComissaoTelFrente() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesTelFrente.DivComissaoTelFrente}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoTelFrente" className={stylesTelFrente.InputComissaoTelFrente} type="number" placeholder='Digite o valor do telefone' />
    </div>
  );
}