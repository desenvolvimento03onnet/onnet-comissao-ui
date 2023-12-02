import stylesTVTele from './ComissaoTVTele.module.css';
import { useState } from 'react';

export default function inputComissaoTVTele() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesTVTele.DivComissaoTVTele}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoTVTele" className={stylesTVTele.InputComissaoTVTele} type="number" placeholder='Digite o valor do dia 02' />
    </div>
  );
}