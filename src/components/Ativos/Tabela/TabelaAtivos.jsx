import styles from './TabelaAtivos.module.css';

function tabelaSMS(data) {
  if(data.length == 0){
    var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="4">Nenhum Contrato Encontrado</td></tr>'
    return resultado;
  } else if(data.length > 0){
    var resultado = [];
    for(var i=0;i<data.length;i++){
      resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].endereco+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].criados+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].cancelados+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].ativos+"</td></tr>";
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } else {
    return(
      <table className={styles.TabelaFundo} id='TabelaSMS'>
        <thead className={styles.Thead}>
          <tr className={styles.Tr}>
            <th className={styles.Th}>Cidade/Bairro</th>
            <th className={styles.Th}>Criados</th>
            <th className={styles.Th}>Cancelados</th>
            <th className={styles.Th}>Ativos</th>
          </tr>
        </thead>
        <tbody className={styles.Tbody} id='Tbody'>
        </tbody>
      </table>
      )
    }
}

export default tabelaSMS;
