import axios from 'axios';
import tabelaComissaoRenovacao from '../components/ComissaoRenovacao/Tabela/TabelaComissaoRenovacao';

export default function Load(comissaoTVFrente, comissaoTVTele, comissaoTelFrente, comissaoTelTele, comissaoRecorrenteFrente, comissaoRecorrenteTele, comissaoVendaFrente2, comissaoVendaFrente50, comissaoVendaTele3, comissaoVendaTele4, dtInicio, dtFim) {
  
  var url = `http://localhost:3000/api/comissaoRenovacao?&comissaoTVFrente=`+comissaoTVFrente+`&comissaoTVTele=`+comissaoTVTele+`&comissaoTelFrente=`+comissaoTelFrente+`&comissaoTelTele=`+comissaoTelTele+`&comissaoRecorrenteFrente=`+comissaoRecorrenteFrente+`&comissaoRecorrenteTele=`+comissaoRecorrenteTele+`&comissaoVendaFrente2=`+comissaoVendaFrente2+`&comissaoVendaFrente50=`+comissaoVendaFrente50+`&comissaoVendaTele3=`+comissaoVendaTele3+`&comissaoVendaTele4=`+comissaoVendaTele4+`&dataInicio=`+dtInicio+`&dataFim=`+dtFim;
  // Construa a URL com os parâmetros
  return axios.get(url)
    .then((response) => {
       return tabelaComissaoRenovacao(response.data);
    })
    .catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
    });
}