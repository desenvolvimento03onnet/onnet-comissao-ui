import styles from './TabelaVencimento.module.css';

function tabelaVencimento(data) {
  if(data.length == 0){
    var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="2">Nenhum Contrato Encontrado</td></tr>'
    return resultado;
  } else if(data.length > 0){
    var resultado = [];
    var recebe = 99;
    for(var i=0;i<data.length;i++){
      for(var j=0;j<data[i].length;j++){
        resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i][j].vencimento+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i][j].qnt+"</td></tr>";
      }
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } else {
    return(
      <table className={styles.TabelaFundo} id='TabelaVencimento'>
        <thead className={styles.Thead}>
          <tr className={styles.Tr}>
            <th className={styles.Th}>Dia de Vencimento</th>
            <th className={styles.Th}>Quantidade de Contratos</th>
          </tr>
        </thead>
        <tbody className={styles.Tbody} id='Tbody'>
        </tbody>
      </table>
      )
    }
}

export default tabelaVencimento;
