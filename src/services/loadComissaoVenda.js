import axios from 'axios';
import tabelaComissaoVenda from '../components/ComissaoVenda/Tabela/TabelaComissaoVenda';

export default function Load(ComissaoTV, ComissaoTel, ComissaoRecorrente, ComissaoVenda, Dia01, Dia02, dtInicio, dtFim) {
  
  var url = `http://localhost:3000/api/comissaoVenda?&comissaoTV=`+ComissaoTV+`&comissaoTel=`+ComissaoTel+`&comissaoRecorrente=`+ComissaoRecorrente+`&comissaoVenda=`+ComissaoVenda+`&comissaoDia01=`+Dia01+`&comissaoDia02=`+Dia02+`&dataInicio=`+dtInicio+`&dataFim=`+dtFim;
  // Construa a URL com os parâmetros
  return axios.get(url)
    .then((response) => {
       return tabelaComissaoVenda(response.data);
    })
    .catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
    });
}