import stylesPesquisar from './Pesquisar.module.css';
import LoadComissaoVenda from "../../../services/loadComissaoVenda";

function mouseOver(){
  if(document.getElementById("InputDataInicio").value == '' || document.getElementById("InputDataFim").value == '' || document.getElementById("InputComissaoDia01").value == '' || document.getElementById("InputComissaoDia02").value == '' || document.getElementById("InputComissaoVenda").value == '' || document.getElementById("InputComissaoRecorrente").value == '' || document.getElementById("InputComissaoTel").value == '' || document.getElementById("InputComissaoTV").value == ''){
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
    var Dia01 = document.getElementById("InputComissaoDia01").value;
    var Dia02 = document.getElementById("InputComissaoDia02").value;
    var ComissaoVenda = document.getElementById("InputComissaoVenda").value;
    var ComissaoRecorrente = document.getElementById("InputComissaoRecorrente").value;
    var ComissaoTel = document.getElementById("InputComissaoTel").value;
    var ComissaoTV = document.getElementById("InputComissaoTV").value;
    var dataInicio = document.getElementById("InputDataInicio").value;
    var dataFim = document.getElementById("InputDataFim").value;
    if(Dia01 == '' || dataInicio == '' || dataFim == '' || ComissaoRecorrente == '' || Dia02 == '' || ComissaoVenda == '' || ComissaoTel == '' || ComissaoTV == ''){
      alert("Insira o valor em Todos os Campos");
    }else{
      LoadComissaoVenda((ComissaoTV.replace(',','.')), (ComissaoTel.replace(',','.')), (ComissaoRecorrente.replace(',','.')), (ComissaoVenda/100), (Dia01.replace(',','.')), (Dia02.replace(',','.')), dataInicio, dataFim);
      var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="18"><div class="'+stylesPesquisar.DivCarregar+'"><div class="'+stylesPesquisar.Carregar+'"></div></div></td></tr>'
      return resultado;
    }
  }
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button onClick={handleClick} onMouseOver={mouseOver} onMouseOut={mouseOut} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}