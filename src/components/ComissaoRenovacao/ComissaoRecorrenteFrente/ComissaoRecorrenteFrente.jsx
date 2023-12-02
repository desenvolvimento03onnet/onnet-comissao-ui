import stylesRecorrenteFrente from './ComissaoRecorrenteFrente.module.css';
import { useState } from 'react';

export default function inputComissaoTV() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRecorrenteFrente.DivComissaoRecorrenteFrente}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoRecorrenteFrente" className={stylesRecorrenteFrente.InputComissaoRecorrenteFrente} type="number" placeholder='Digite o valor do Pagamento Recorrente' />
    </div>
  );
}