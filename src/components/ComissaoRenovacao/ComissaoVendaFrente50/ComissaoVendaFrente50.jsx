import stylesVendaFrente50 from './ComissaoVendaFrente50.module.css';
import { useState } from 'react';

export default function inputComissaoVendaFrente50() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 3;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVendaFrente50.DivComissaoVendaFrente50}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoVendaFrente50" className={stylesVendaFrente50.InputComissaoVendaFrente50} type="number" placeholder='Digite a porcentagem do Upgrade' />
    </div>
  );
}