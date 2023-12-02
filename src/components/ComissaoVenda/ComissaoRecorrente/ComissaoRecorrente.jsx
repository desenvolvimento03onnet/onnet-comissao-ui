import stylesRecorrente from './ComissaoRecorrente.module.css';
import { useState } from 'react';

export default function inputComissaoRecorrente() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRecorrente.DivComissaoRecorrente}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoRecorrente" className={stylesRecorrente.InputComissaoRecorrente} type="number" placeholder='Digite o valor de pagamento recorrente' />
    </div>
  );
}