import stylesPesquisar from './Pesquisar.module.css';
import LoadComissaoRenovacao from "../../../services/loadComissaoRenovacao";

function mouseOver(){
  if(document.getElementById("InputDataInicio").value == '' || document.getElementById("InputDataFim").value == '' || document.getElementById("InputComissaoRecorrenteFrente").value == '' || document.getElementById("InputComissaoRecorrenteTele").value == '' || document.getElementById("InputComissaoTelFrente").value == '' || document.getElementById("InputComissaoTelTele").value == '' || document.getElementById
  ("InputComissaoTVFrente").value == '' || document.getElementById
  ("InputComissaoTVTele").value == '' || document.getElementById
  ("InputComissaoVendaFrente2").value == '' || document.getElementById
  ("InputComissaoVendaFrente50").value == '' || document.getElementById
  ("InputComissaoVendaTele3").value == '' || document.getElementById
  ("InputComissaoVendaTele4").value == ''){
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
    var RecorrenteFrente = document.getElementById("InputComissaoRecorrenteFrente").value;
    var RecorrenteTele = document.getElementById("InputComissaoRecorrenteTele").value;
    var TelFrente = document.getElementById("InputComissaoTelFrente").value;
    var TelTele = document.getElementById("InputComissaoTelTele").value;
    var TVFrente = document.getElementById("InputComissaoTVFrente").value;
    var TVTele = document.getElementById("InputComissaoTVTele").value;
    var VendaFrente2 = document.getElementById("InputComissaoVendaFrente2").value;
    var VendaFrente50 = document.getElementById("InputComissaoVendaFrente50").value;
    var VendaTele3 = document.getElementById("InputComissaoVendaTele3").value;
    var VendaTele4 = document.getElementById("InputComissaoVendaTele4").value;
    var dataInicio = document.getElementById("InputDataInicio").value;
    var dataFim = document.getElementById("InputDataFim").value;
    if(RecorrenteFrente == '' || dataInicio == '' || dataFim == '' || RecorrenteTele == '' || TelFrente == '' || TelTele == '' || TVFrente == '' || TVTele == '' || VendaFrente2 == '' || VendaFrente50 == '' || VendaTele3 == '' || VendaTele4 == ''){
      alert("Insira o valor em Todos os Campos");
    }else{
      LoadComissaoRenovacao((TVFrente.replace(',','.')), (TVTele.replace(',','.')), (TelFrente.replace(',','.')), (TelTele.replace(',','.')), (RecorrenteFrente.replace(',','.')), (RecorrenteTele.replace(',','.')), (VendaFrente2/100), (VendaFrente50/100), (VendaTele3.replace(',','.')), (VendaTele4.replace(',','.')), dataInicio, dataFim);
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