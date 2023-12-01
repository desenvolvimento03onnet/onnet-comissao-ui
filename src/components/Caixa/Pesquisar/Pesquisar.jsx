import stylesPesquisar from './Pesquisar.module.css';
import LoadCaixa from "../../../services/loadCaixa";

export default function ButtonPesquisar() {
  const handleClick = (e) => {
    e.preventDefault();
    var caixa = document.getElementById("InputCaixa").value;
    if(caixa == ''){
      alert("Insira o valor em Todos os Campos");
    }else{
      LoadCaixa('%25'+caixa.toUpperCase()+"%25");
      var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="5"><div class="'+stylesPesquisar.DivCarregar+'"><div class="'+stylesPesquisar.Carregar+'"></div></div></td></tr>'
      return resultado;
    }
  }
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button onClick={handleClick} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}