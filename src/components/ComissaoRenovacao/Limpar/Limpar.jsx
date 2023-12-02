import stylesLimpar from './Limpar.module.css';

export default function buttonLimpar() {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById("InputComissaoRecorrenteFrente").value = '';
    document.getElementById("InputComissaoRecorrenteTele").value = '';
    document.getElementById("InputComissaoTelFrente").value = '';
    document.getElementById("InputComissaoTelTele").value = '';
    document.getElementById("InputComissaoTVFrente").value = '';
    document.getElementById("InputComissaoTVTele").value = '';
    document.getElementById("InputComissaoVendaFrente2").value = '';
    document.getElementById("InputComissaoVendaFrente50").value = '';
    document.getElementById("InputComissaoVendaTele3").value = '';
    document.getElementById("InputComissaoVendaTele4").value = '';
    document.getElementById("InputDataInicio").value = '';
    document.getElementById("InputDataFim").value = '';
    document.getElementById("Tbody").innerHTML = '';
  }
  return (
    <div className={stylesLimpar.DivLimpar}>
      <button onClick={handleClick} className={stylesLimpar.ButtonLimpar}>Limpar</button>
    </div>
  );
}