import styles from './TabelaSMS.module.css';

function tabelaSMS(data) {
{/* <tr key={[i]}>
            <td className={styles.Td}>{data[i].nome}</td>
            <td className={styles.Td}>{data[i].nro}</td>
            <td className={styles.Td}>{data[i].data}</td>
          </tr> */}
  if(data.length == undefined){
    return(
    <table className={styles.TabelaFundo}>
      <thead className={styles.Thead}>
        <tr>
          <td>Cliente</td>
          <td>Número do cliente</td>
          <td>Data de Envio</td>
        </tr>
      </thead>
      <tbody className={styles.Tbody} id='Tbody'>
      </tbody>
    </table>
    )
  }
  if(data.length == 0){
    var resultado = document.getElementById("Tbody").innerHTML = '<tr><td className={styles.Td}>Nro Não Encontrado</td><td className={styles.Td}>Nro Não Encontrado</td><td className={styles.Td}>Nro Não Encontrado</td></tr>'
    return resultado;
  }
  if(data.length > 0){
    var resultado = [];
    for(var i=0;i<data.length;i++){
      resultado[i] = document.getElementById("Tbody").innerHTML = "<tr key={Tr"+[i]+"}><td className={"+styles.Td+"}>"+data[i].nome+"</td><td className={"+styles.Td+"}>"+data[i].nro+"</td><td className={"+styles.Td+"}>"+data[i].data+"</td></tr>";
      return resultado;
    }
    
  }
  
// return(
//     <table className={styles.TabelaFundo}>
//       <thead className={styles.Thead}>
//         <tr>
//           <td>Cliente</td>
//           <td>Número do cliente</td>
//           <td>Data de Envio</td>
//         </tr>
//       </thead>
//       <tbody className={styles.Tbody}>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//       </tbody>
//     </table>
//   )
  
}

export default tabelaSMS;
