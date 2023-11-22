import stylesRenovacaoRecorrenteTele from './ComissaoRenovacaoRecorrenteTele.module.css';
import { useState } from 'react';

export default function inputRenovacaoRecorrenteTele() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    const limit = 8;
    setValorInput(event.target.value.slice(0, limit));
  };
  
  return (
    <div className={stylesRenovacaoRecorrenteTele.DivRenovacaoRecorrenteTele}>
      <input value={valorInput} onChange={handleChange} id="InputRenovacaoRecorrenteTele" className={stylesRenovacaoRecorrenteTele.InputRenovacaoRecorrenteTele} type="number" placeholder='Digite o valor Recorrente' />
    </div>
  );
}