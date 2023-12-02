import stylesBeta from './Beta.module.css';
import { useState } from 'react';

export default function inputDataFim() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

  return (
    <div className={stylesBeta.DivBeta}>
      <span>BETA</span>
    </div>
  );
  }