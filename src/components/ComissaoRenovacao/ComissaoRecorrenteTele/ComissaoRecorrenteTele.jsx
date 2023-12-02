import stylesRecorrenteTele from './ComissaoRecorrenteTele.module.css';
import { useState } from 'react';

export default function inputComissaoRecorrenteTele() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRecorrenteTele.DivComissaoRecorrenteTele}>
      <input value={valorInput} onChange={handleChange} id="InputComissaoRecorrenteTele" className={stylesRecorrenteTele.InputComissaoRecorrenteTele} type="number" placeholder='Digite o valor do pagamento recorrente' />
    </div>
  );
}