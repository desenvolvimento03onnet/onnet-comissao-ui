import stylesLimpar from './Limpar.module.css';

export default function buttonLimpar() {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById("ComboBoxDatasVencimento");
    document.getElementById("valorSelect").value = '';
    document.getElementById("InputDataInicio").value = '';
    document.getElementById("InputDataFim").value = '';
    document.getElementById("Tbody").innerHTML = '';
  }
  return (
    <div className={stylesLimpar.DivLimpar}>
      <button onClick={handleClick} className={stylesLimpar.ButtonLimpar}>Limpar</button>
    </div>
  );
}