import stylesPesquisar from './Pesquisar.module.css';
import LoadVencimento from "../../../services/loadVencimento";

function mouseOver(){
  if(document.getElementById("InputDataInicio").value == '' || document.getElementById("InputDataFim").value == '' || document.getElementById("valorSelect").value == ''){
    document.getElementById("labios").style.height = "50%";
    document.getElementById("labios").style.transition = "0.2s";
    document.getElementById("labios").style.borderRadius = "100% 100% 0 0";
  }else{
    document.getElementById("labios").style.height = "50%";
    document.getElementById("labios").style.transition = "0.2s";
    document.getElementById("labios").style.borderRadius = "0 0 100% 100%";
  }
}
function mouseOut(){
  document.getElementById("labios").style.height = "0%";
}

export default function ButtonPesquisar() {
  const handleClick = (e) => {
    e.preventDefault();
    var datasVencimento = document.getElementById("valorSelect").value.split(',');
    datasVencimento.sort((a, b) => a - b);
    var dataInicio = document.getElementById("InputDataInicio").value;
    var dataFim = document.getElementById("InputDataFim").value;
    if(datasVencimento == '' || dataInicio == '' || dataFim == ''){
      alert("Insira o valor em Todos os Campos");
    }else{
       LoadVencimento(datasVencimento, dataInicio, dataFim);
       var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="2"><div class="'+stylesPesquisar.DivCarregar+'"><div class="'+stylesPesquisar.Carregar+'"></div></div></td></tr>'
      return resultado;
    }
  }
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button onClick={handleClick} onMouseOver={mouseOver} onMouseOut={mouseOut} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}