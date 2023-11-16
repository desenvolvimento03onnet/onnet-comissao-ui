import stylesPesquisar from './Pesquisar.module.css';
import LoadVencimento from "../../../services/loadVencimento";

export default function ButtonPesquisar() {
  const handleClick = (e) => {
    e.preventDefault();
    var datasVencimento = document.getElementById("valorSelect").value;
    var dataInicio = document.getElementById("InputDataInicio").value;
    var dataFim = document.getElementById("InputDataFim").value;
    if(datasVencimento == '' || dataInicio == '' || dataFim == ''){
      alert("Insira o valor em Todos os Campos");
    }else{
       LoadVencimento(datasVencimento, dataInicio, dataFim);
    }
  }
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button onClick={handleClick} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}