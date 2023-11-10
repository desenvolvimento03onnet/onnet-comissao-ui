import stylesDataFim from './DataFim.module.css';

export default function inputDataFim() {
  return (
    <div className={stylesDataFim.DivDataFim}>
      <input className={stylesDataFim.InputDataFim} type="date" placeholder='Digite a Data Final' />
    </div>
  );
  }