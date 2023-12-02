import stylesVenda from './ComissaoVenda.module.css';
import { useState } from 'react';

export default function inputComissaoVenda() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 3;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesVenda.DivComissaoVenda}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoVenda" className={stylesVenda.InputComissaoVenda} type="number" placeholder='Digite a porcentagem da comissão de Venda' />
    </div>
  );
}