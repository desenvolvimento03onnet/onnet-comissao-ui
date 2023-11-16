import axios from 'axios';
import tabelaVencimento from '../components/Vencimento/Tabela/TabelaVencimento';

export default function Load(diasVencimento, dtInicio, dtFim) {
  var datas = [];
  var junta = '';
  for(var i=0;i<diasVencimento.split(/,/).length;i++){
    datas[i] = 'diasVencimento='+diasVencimento.split(/,/)[i]+'&';
    junta+=datas[i];
  }
  var url = `http://localhost:3000/api/QntContratos?`+junta+`dataInicio=`+dtInicio+`&dataFim=`+dtFim;
  // Construa a URL com os parâmetros
  
  return axios.get(url)
    .then((response) => {
       return tabelaVencimento(response.data);
    })
    .catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
    });
}