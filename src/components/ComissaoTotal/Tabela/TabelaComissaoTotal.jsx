import styles from './TabelaComissaoTotal.module.css';

function tabelaComissaoTotal(data) {
  if(data.length == 0){
    var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="17">Nro Não Encontrado</td></tr>'
    return resultado;
  } else if(data.length > 0){
    var resultado = [];
    var valor_plano = [];
    for(var i=0;i<data.length;i++){
      if(data[i].valor_plano.indexOf(',') == -1){
        valor_plano[i] = data[i].valor_plano;
      }else{
        valor_plano[i] = parseFloat(data[i].valor_plano);
      }
      resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].codigo+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].cliente+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].cidade+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].contrato+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].data+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].operacao+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].operador+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].setor+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].fatura+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].dt_liquidacao+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].pago+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_plano.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_tv.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_telefonia.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_recorrente.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].comissao_venda.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].dia_02_04.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_total.replaceAll(',','.')+"</td></tr>";
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } else {
    return(
      <table className={styles.TabelaFundo} id='TabelaComissaoTotal'>
        <thead className={styles.Thead}>
          <tr className={styles.Tr}>
            <th className={styles.Th}>Código do Cliente</th>
            <th className={styles.Th}>Cliente</th>
            <th className={styles.Th}>Cidade</th>
            <th className={styles.Th}>Contrato</th>
            <th className={styles.Th}>Data</th>
            <th className={styles.Th}>Operação</th>
            <th className={styles.Th}>Operador</th>
            <th className={styles.Th}>Setor</th>
            <th className={styles.Th}>Fatura</th>
            <th className={styles.Th}>Data de Liquidação</th>
            <th className={styles.Th}>Pago?</th>
            <th className={styles.Th}>Valor do Plano</th>
            <th className={styles.Th}>Valor da TV</th>
            <th className={styles.Th}>Valor da Telefonia</th>
            <th className={styles.Th}>Valor Recorrente</th>
            <th className={styles.Th}>Comissão da Venda</th>
            <th className={styles.Th}>Dia 02 ou 04?</th>
            <th className={styles.Th}>Valor Total</th>
          </tr>
        </thead>
        <tbody className={styles.Tbody} id='Tbody'>
        </tbody>
      </table>
      )
    }
}

export default tabelaComissaoTotal;
