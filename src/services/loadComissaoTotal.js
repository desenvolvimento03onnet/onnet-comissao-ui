import axios from 'axios';
import tabelaComissaoTotal from '../components/ComissaoTotal/Tabela/TabelaComissaoTotal';

export default function Load(ComissaoVendaTV, ComissaoVendaTel, ComissaoVendaRecorrente, ComissaoVenda, Dia01, Dia02, RenovacaoTVFrente, RenovacaoTVTele, RenovacaoTelFrente, RenovacaoTelTele, RenovacaoRecorrenteFrente,RenovacaoRecorrenteTele, RenovacaoFrente2, RenovacaoFrente50, RenovacaoTele3, RenovacaoTele4, dtInicio, dtFim) {
  
  var url = `http://localhost:3000/api/comissaoTotal?&comissaoVendaTV=`+ComissaoVendaTV+`&comissaoVendaTel=`+ComissaoVendaTel+`&comissaoVendaRecorrente=`+ComissaoVendaRecorrente+`&comissaoVenda=`+ComissaoVenda+`&comissaoDia01=`+Dia01+`&comissaoDia02=`+Dia02+`&comissaoRenovacaoTVFrente=`+RenovacaoTVFrente+`&comissaoRenovacaoTVTele=`+RenovacaoTVTele+`&comissaoRenovacaoTelFrente=`+RenovacaoTelFrente+`&comissaoRenovacaoTelTele=`+RenovacaoTelTele+`&comissaoRenovacaoRecorrenteFrente=`+RenovacaoRecorrenteFrente+`&comissaoRenovacaoRecorrenteTele=`+RenovacaoRecorrenteTele+`&comissaoRenovacaoFrente2=`+RenovacaoFrente2+`&comissaoRenovacaoFrente50=`+RenovacaoFrente50+`&comissaoRenovacaoTele3=`+RenovacaoTele3+`&comissaoRenovacaoTele4=`+RenovacaoTele4+`&dataInicio=`+dtInicio+`&dataFim=`+dtFim;
  // Construa a URL com os parâmetros
  
  return axios.get(url)
    .then((response) => {
       return tabelaComissaoTotal(response.data);
    })
    .catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
    });
}