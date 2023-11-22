import stylesVenda from './ComissaoVenda.module.css';
import { useState } from 'react';

export default function inputVenda() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVenda.DivVenda}>
      <input value={valorInput} onChange={handleChange} id="InputVenda" className={stylesVenda.InputVenda} type="number" placeholder='Digite o valor da Venda' />
    </div>
  );
}