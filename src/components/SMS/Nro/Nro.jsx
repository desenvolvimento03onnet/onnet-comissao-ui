import stylesNro from './Nro.module.css';

export default function inputNroSMS() {
  return (
    <div className={stylesNro.DivNro}>
      <input className={stylesNro.InputNro} type="text" placeholder='Digite o Nro de Telefone do Cliente' />
    </div>
  );
}