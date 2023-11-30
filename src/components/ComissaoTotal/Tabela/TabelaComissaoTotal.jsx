import styles from './TabelaComissaoTotal.module.css';
import csvDownload from 'json-to-csv-export'

var ipAddressesData = [];
async function CSV(dados){
  for(var i=0;i<dados.length;i++){
    ipAddressesData[i] = {i:JSON.stringify(dados[i])};
  }
}

function tabelaComissaoTotal(data) {
  var recebe = [];
  const date = new Date();
  const dataToConvert = {
    data: ipAddressesData,
    filename: 'Relatório_de_Comissões_Geral_Gerado_Dia_'+date.getDate()+'_'+date.getMonth()+'_'+date.getFullYear(),
    delimiter: ",",
    headers: ["Código", "Cliente", "Cidade", "Contrato", "Data", "Operação", "Operador", "Setor", "Fatura", "Data Liquidação", "Pago?", "Valor Plano", "Valor TV", "Valor Telefonia", "Valor Recorrente", "Comissão Venda", "Dia 02 ou 04?", "Valor Total"]
  }
  if(data.length == 0){
    var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="18">Nro Não Encontrado</td></tr>'
    return resultado;
  } else if(data.length > 0){
    var resultado = [];
    for(var i=0;i<data.length;i++){
      recebe[i] = data[i].codigo + "," + data[i].cliente + "," + data[i].cidade + "," + data[i].contrato + "," + data[i].data.toString().substring(8,10)+"/"+data[i].data.toString().substring(5,7)+"/"+data[i].data.toString().substring(0,4) + "," + data[i].operacao + "," + data[i].operador + "," + data[i].setor + "," + data[i].fatura + "," + data[i].dt_liquidacao + "," + data[i].pago + "," + data[i].valor_plano.replaceAll(',','.') + "," + data[i].valor_tv.replaceAll(',','.') + "," + data[i].valor_telefonia.replaceAll(',','.') + "," + data[i].valor_recorrente.replaceAll(',','.') + "," + data[i].comissao_venda.replaceAll(',','.') + "," + data[i].dia_02_04.replaceAll(',','.') + "," + data[i].valor_total.replaceAll(',','.');
      resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].codigo+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid; word-break: break-all;\">"+data[i].cliente+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].cidade+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].contrato+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].data.toString().substring(8,10)+"/"+data[i].data.toString().substring(5,7)+"/"+data[i].data.toString().substring(0,4)+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].operacao+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid; word-break: break-all;\">"+data[i].operador+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid; word-break: break-all;\">"+data[i].setor+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].fatura+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].dt_liquidacao+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid; word-break: break-all;\">"+data[i].pago+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_plano.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_tv.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_telefonia.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_recorrente.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].comissao_venda.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].dia_02_04.replaceAll(',','.')+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].valor_total.replaceAll(',','.')+"</td></tr>";
    }
   CSV(recebe);
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } else {
    return(
      <div className={styles.DivFundo}>
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
        <div className={styles.DivBotao} id='DivBotao'>
          <button className={styles.ButtonDownload} onClick={() => csvDownload(dataToConvert)}>
          Baixar CSV
          </button>
        </div>
      </div>
      )
      // sessionStorage.clear();
    }
}

export default tabelaComissaoTotal;
