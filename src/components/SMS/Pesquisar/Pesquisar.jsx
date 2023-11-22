import stylesPesquisar from './Pesquisar.module.css';
import LoadSMS from "../../../services/loadSMS";

function mouseOver(){
  if(document.getElementById("InputDataInicio").value == '' || document.getElementById("InputDataFim").value == '' || document.getElementById("InputNro").value == ''){
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
    var nro = document.getElementById("InputNro").value;
    var dataInicio = document.getElementById("InputDataInicio").value;
    var dataFim = document.getElementById("InputDataFim").value;
    if(nro == '' || dataInicio == '' || dataFim == ''){
      alert("Insira o valor em Todos os Campos");
    }else{
      LoadSMS('%'+nro, dataInicio, dataFim);
    }
  }
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button onClick={handleClick} onMouseOver={mouseOver} onMouseOut={mouseOut} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}