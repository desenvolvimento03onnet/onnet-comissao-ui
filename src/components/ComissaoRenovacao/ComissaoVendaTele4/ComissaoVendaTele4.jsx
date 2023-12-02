import stylesVendaTele4 from './ComissaoVendaTele4.module.css';
import { useState } from 'react';

export default function inputComissaoVendaTele4() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVendaTele4.DivComissaoVendaTele4}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoVendaTele4" className={stylesVendaTele4.InputComissaoVendaTele4} type="number" placeholder='Digite o valor do Upgrade' />
    </div>
  );
}