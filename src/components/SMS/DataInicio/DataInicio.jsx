import stylesDataInicio from './DataInicio.module.css';

export default function inputDataInicio() {
  return (
    <div className={stylesDataInicio.DivDataInicio}>
      <input className={stylesDataInicio.InputDataInicio} type="date" placeholder='Digite a Data Inicial' />
    </div>
  );
}