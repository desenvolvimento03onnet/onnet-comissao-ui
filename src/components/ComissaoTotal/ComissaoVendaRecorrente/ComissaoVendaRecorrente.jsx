import stylesVendaRecorrente from './ComissaoVendaRecorrente.module.css';
import { useState } from 'react';

export default function inputVendaRecorrente() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 3;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVendaRecorrente.DivVendaRecorrente}>
      <input value={valorInput} onChange={handleChange} id="InputVendaRecorrente" className={stylesVendaRecorrente.InputVendaRecorrente} type="number" placeholder='Digite o valor do Pagamento Recorrente' />
    </div>
  );
}