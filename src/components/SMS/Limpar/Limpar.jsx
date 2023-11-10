import stylesLimpar from './Limpar.module.css';

export default function buttonLimpar() {
  return (
    <div className={stylesLimpar.DivLimpar}>
      <button className={stylesLimpar.ButtonLimpar}>Limpar</button>
    </div>
  );
}