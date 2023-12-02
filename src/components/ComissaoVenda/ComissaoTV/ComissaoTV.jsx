import stylesTV from './ComissaoTV.module.css';
import { useState } from 'react';

export default function inputComissaoTV() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesTV.DivComissaoTV}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoTV" className={stylesTV.InputComissaoTV} type="number" placeholder='Digite o valor da TV' />
    </div>
  );
}