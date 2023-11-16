import styles from './TabelaCaixa.module.css';

function tabelaCaixa(data) {
  if(data.length == 0){
    var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="5">Caixa Não Encontrada</td></tr>'
    return resultado;
  } else if(data.length > 0){
    var resultado = [];
    for(var i=0;i<data.length;i++){
      resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].codigo+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;overflow-wrap: break-word;\">"+data[i].cliente+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].conexao+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].caixa+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].porta+"</td></tr>";
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } else {
    return(
      <table className={styles.TabelaFundo} id='TabelaSMS'>
        <thead className={styles.Thead}>
          <tr className={styles.Tr}>
            <th className={styles.Th}>Código</th>
            <th className={styles.Th}>Cliente</th>
            <th className={styles.Th}>Conexão</th>
            <th className={styles.Th}>Caixa</th>
            <th className={styles.Th}>Porta</th>
          </tr>
        </thead>
        <tbody className={styles.Tbody} id='Tbody'>
        </tbody>
      </table>
      )
    }
}

export default tabelaCaixa;
