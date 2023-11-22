import stylesVendaTel from './ComissaoVendaTel.module.css';
import { useState } from 'react';

export default function inputVendaTel() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVendaTel.DivVendaTel}>
      <input value={valorInput} onChange={handleChange} id="InputVendaTel" className={stylesVendaTel.InputVendaTel} type="number" placeholder='Digite o valor da Telefonia' />
    </div>
  );
}