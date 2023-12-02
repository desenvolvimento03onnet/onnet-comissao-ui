import stylesTVFrente from './ComissaoTVFrente.module.css';
import { useState } from 'react';

export default function inputComissaoTVFrente() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesTVFrente.DivComissaoTVFrente}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoTVFrente" className={stylesTVFrente.InputComissaoTVFrente} type="number" placeholder='Digite o valor da TV' />
    </div>
  );
}