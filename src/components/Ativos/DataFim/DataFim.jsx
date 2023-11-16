import stylesDataFim from './DataFim.module.css';
import { useState } from 'react';

export default function inputDataFim() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

  return (
    <div className={stylesDataFim.DivDataFim}>
      <input value={valorInput} onChange={handleChange} id="InputDataFim" className={stylesDataFim.InputDataFim} type="date" placeholder='Digite a Data Final' />
    </div>
  );
  }