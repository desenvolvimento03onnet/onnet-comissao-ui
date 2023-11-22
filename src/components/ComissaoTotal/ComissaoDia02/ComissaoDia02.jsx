import stylesDia02 from './ComissaoDia02.module.css';
import { useState } from 'react';

export default function inputDia02() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesDia02.DivDia02}>
      <input value={valorInput} onChange={handleChange} id="InputDia02" className={stylesDia02.InputDia02} type="number" placeholder='Digite o valor do dia 02' />
    </div>
  );
}