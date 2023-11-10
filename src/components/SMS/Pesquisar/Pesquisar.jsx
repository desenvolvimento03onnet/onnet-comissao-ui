import stylesPesquisar from './Pesquisar.module.css';

export default function ButtonPesquisar(onclick) {
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}