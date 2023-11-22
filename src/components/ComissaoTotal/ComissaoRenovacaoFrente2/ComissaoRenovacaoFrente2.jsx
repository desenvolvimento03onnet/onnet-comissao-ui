import stylesFrente2 from './ComissaoRenovacaoFrente2.module.css';
import { useState } from 'react';

export default function inputFrente2() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesFrente2.DivFrente2}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoFrente2" className={stylesFrente2.InputFrente2} type="number" placeholder='Digite o valor da Renovação' />
    </div>
  );
}