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
    }
  }
  return (
    <div className={stylesPesquisar.DivPesquisar}>
      <button onClick={handleClick} className={stylesPesquisar.ButtonPesquisar}>Pesquisar</button>
    </div>
  );
}