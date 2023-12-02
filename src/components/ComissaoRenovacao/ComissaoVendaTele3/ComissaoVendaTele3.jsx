import stylesVendaTele3 from './ComissaoVendaTele3.module.css';
import { useState } from 'react';

export default function inputComissaoVendaTele3() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVendaTele3.DivComissaoVendaTele3}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoVendaTele3" className={stylesVendaTele3.InputComissaoVendaTele3} type="number" placeholder='Digite o valor da Renovação' />
    </div>
  );
}