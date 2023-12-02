import stylesDataInicio from './DataInicio.module.css';
import { useState } from 'react';

export default function inputDataInicio() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

  return (
    <div className={stylesDataInicio.DivDataInicio}>
      <input value={valorInput} onChange={handleChange} id="InputDataInicio" className={stylesDataInicio.InputDataInicio} type="date" placeholder='Digite a Data Inicial' />
    </div>
  );
}