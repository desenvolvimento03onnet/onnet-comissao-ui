import stylesPesquisar from './Pesquisar.module.css';
import LoadAtivos from "../../../services/loadAtivos";

export default function ButtonPesquisar() {
  const handleClick = (e) => {
    e.preventDefault();
    var dataFim = document.getElementById("InputDataFim").value;
    if(dataFim == ''){
      alert("Insira a data final para pesquisar");
    }else{
      LoadAtivos(dataFim);
      var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="4"><div class="'+stylesPesquisar.DivCarregar+'"><div class="'+stylesPesquisar.Carregar+'"></div></div></td></tr>'
      return resultado;
    }
  }
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button onClick={handleClick} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}