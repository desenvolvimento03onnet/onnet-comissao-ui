import stylesPesquisar from './Pesquisar.module.css';
import LoadSMS from "../../../services/loadSMS";

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
      <button onClick={handleClick} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}