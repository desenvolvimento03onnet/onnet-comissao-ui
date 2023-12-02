import stylesVendaFrente2 from './ComissaoVendaFrente2.module.css';
import { useState } from 'react';

export default function inputComissaoVendaFrente2() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 3;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVendaFrente2.DivComissaoVendaFrente2}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoVendaFrente2" className={stylesVendaFrente2.InputComissaoVendaFrente2} type="number" placeholder='Digite a porcentagem da Renovação' />
    </div>
  );
}