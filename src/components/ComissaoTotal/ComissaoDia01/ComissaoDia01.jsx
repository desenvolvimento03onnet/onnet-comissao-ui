import stylesDia01 from './ComissaoDia01.module.css';
import { useState } from 'react';

export default function inputDia01() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesDia01.DivDia01}>
      <input value={valorInput} onChange={handleChange} id="InputDia01" className={stylesDia01.InputDia01} type="number" placeholder='Digite o valor do dia 01' />
    </div>
  );
}