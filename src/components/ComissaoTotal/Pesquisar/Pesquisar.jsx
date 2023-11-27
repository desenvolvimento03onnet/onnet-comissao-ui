import stylesPesquisar from './Pesquisar.module.css';
import LoadComissaoTotal from "../../../services/loadComissaoTotal";

export default function ButtonPesquisar() {
  const handleClick = (e) => {
    e.preventDefault();
    var Dia01 = document.getElementById("InputDia01").value;
    var Dia02 = document.getElementById("InputDia02").value;
    var RenovacaoFrente2 = document.getElementById("InputRenovacaoFrente2").value;
    var RenovacaoFrente50 = document.getElementById("InputRenovacaoFrente50").value;
    var RenovacaoRecorrenteFrente = document.getElementById("InputRenovacaoRecorrenteFrente").value;
    var RenovacaoRecorrenteTele = document.getElementById("InputRenovacaoRecorrenteTele").value;
    var RenovacaoTele3 = document.getElementById("InputRenovacaoTele3").value;
    var RenovacaoTele4 = document.getElementById("InputRenovacaoTele4").value;
    var RenovacaoTelFrente = document.getElementById("InputRenovacaoTelFrente").value;
    var RenovacaoTelTele = document.getElementById("InputRenovacaoTelTele").value;
    var RenovacaoTVFrente = document.getElementById("InputRenovacaoTVFrente").value;
    var RenovacaoTVTele = document.getElementById("InputRenovacaoTVTele").value;
    var ComissaoVenda = document.getElementById("InputVenda").value;
    var ComissaoVendaRecorrente = document.getElementById("InputVendaRecorrente").value;
    var ComissaoVendaTel = document.getElementById("InputVendaTel").value;
    var ComissaoVendaTV = document.getElementById("InputVendaTV").value;
    var dataInicio = document.getElementById("InputDataInicio").value;
    var dataFim = document.getElementById("InputDataFim").value;
    if(Dia01 == '' || dataInicio == '' || dataFim == '' || RenovacaoRecorrenteTele == '' || Dia02 == '' || RenovacaoFrente2 == '' || RenovacaoFrente50 == '' || RenovacaoRecorrenteFrente == '' || RenovacaoTele3 == '' || RenovacaoTele4 == '' || RenovacaoTelFrente == '' || RenovacaoTelTele == '' || RenovacaoTVFrente == '' || RenovacaoTVTele == '' || ComissaoVenda == '' || ComissaoVendaTel == '' || ComissaoVendaTV == '' || ComissaoVendaRecorrente == ''){
      alert("Insira o valor em Todos os Campos");
    }else{
      LoadComissaoTotal((ComissaoVendaTV.replace(',','.')), (ComissaoVendaTel.replace(',','.')), (ComissaoVendaRecorrente.replace(',','.')), (ComissaoVenda/100), (Dia01.replace(',','.')), (Dia02.replace(',','.')), (RenovacaoTVFrente.replace(',','.')), (RenovacaoTVTele.replace(',','.')), (RenovacaoTelFrente.replace(',','.')), (RenovacaoTelTele.replace(',','.')), (RenovacaoRecorrenteFrente.replace(',','.')),(RenovacaoRecorrenteTele.replace(',','.')), (RenovacaoFrente2/100), (RenovacaoFrente50/100), (RenovacaoTele3.replace(',','.')), (RenovacaoTele4.replace(',','.')), dataInicio, dataFim);
      var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="18"><div class="'+stylesPesquisar.DivCarregar+'"><div class="'+stylesPesquisar.Carregar+'"></div></div></td></tr>'
      return resultado;
    }
  }
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button onClick={handleClick} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}