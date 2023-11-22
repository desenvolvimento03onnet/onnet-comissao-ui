import stylesVendaTV from './ComissaoVendaTV.module.css';
import { useState } from 'react';

export default function inputVendaTV() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVendaTV.DivVendaTV}>
      <input value={valorInput} onChange={handleChange} id="InputVendaTV" className={stylesVendaTV.InputVendaTV} type="number" placeholder='Digite o valor da TV' />
    </div>
  );
}