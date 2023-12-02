import stylesLimpar from './Limpar.module.css';

export default function buttonLimpar() {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById("InputComissaoVenda").value = '';
    document.getElementById("InputComissaoTV").value = '';
    document.getElementById("InputComissaoTel").value = '';
    document.getElementById("InputComissaoRecorrente").value = '';
    document.getElementById("InputComissaoDia01").value = '';
    document.getElementById("InputComissaoDia02").value = '';
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