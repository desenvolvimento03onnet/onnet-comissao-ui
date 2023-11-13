import styles from './TabelaSMS.module.css';

function tabelaSMS(data) {
  if(data.length == 0){
    var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="4">Nro Não Encontrado</td></tr>'
    return resultado;
  } else if(data.length > 0){
    var resultado = [];
    for(var i=0;i<data.length;i++){
      resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].nome+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].nro+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+"Data: "+data[i].data.toString().substring(8,10)+"/"+data[i].data.toString().substring(5,7)+"/"+data[i].data.toString().substring(0,4)+"\nHorário: "+data[i].data.toString().substring(11,13)+":"+data[i].data.toString().substring(14,16)+":"+data[i].data.toString().substring(17,19)+"</td><td style=\"display: flex; height: 10vh; overflow-y: scroll; border: 1px black solid;\">"+data[i].msg+"</td></tr>";
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } else {
    return(
      <table className={styles.TabelaFundo} id='TabelaSMS'>
        <thead className={styles.Thead}>
          <tr className={styles.Tr}>
            <th className={styles.Th}>Cliente</th>
            <th className={styles.Th}>Número do cliente</th>
            <th className={styles.Th}>Data de Envio</th>
            <th className={styles.Th}>Mensagem</th>
          </tr>
        </thead>
        <tbody className={styles.Tbody} id='Tbody'>
        </tbody>
      </table>
      )
    }
}

export default tabelaSMS;
