import stylesCSV from './CSV.module.css';

export default function ButtonCSV(data) {
  var array = [];

  for(var i=0;i<data.length;i++){
    array[i] = data[i];
  }
  console.log(array);
  const handleClick = (e) => {
    e.preventDefault();
    var recebe = document.getElementById("InputCSV").value;
    console.log(recebe);
  //   var dados = [];
  //   var botao = document.getElementById("exportJSON");
  //   if(data.length != 0){
  //     for(var i=0;i<data.length;i++){
  //       dados[i] = encodeURIComponent(JSON.stringify(data[i]));
  //     }
      
  //     // what to return in order to show download window?
  // console.log(dados);
  //     botao.setAttribute("href", "data:"+dados);
  //     botao.setAttribute("download", "data.json");
    // }
    
  }
  return (
    <div className={stylesCSV.DivCSV}>
      <button onClick={handleClick} className={stylesCSV.ButtonCSV} id='exportJSON'>Exportar JSON</button>
      <input id='InputCSV' type="text" defaultValue={array} hidden />
    </div>
  );
}