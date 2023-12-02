import stylesDia01 from './ComissaoDia01.module.css';
import { useState } from 'react';

export default function inputComissaoDia01() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesDia01.DivComissaoDia01}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoDia01" className={stylesDia01.InputComissaoDia01} type="number" placeholder='Digite o valor do dia 01' />
    </div>
  );
}