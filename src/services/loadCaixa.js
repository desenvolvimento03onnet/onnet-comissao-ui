import axios from 'axios';
import tabelaCaixa from '../components/Caixa/Tabela/TabelaCaixa';

export default function Load(caixa) {
  var recebe = caixa.replaceAll(' ','%20');
  // Construa a URL com os parâmetros
  const url = `http://localhost:3000/api/ClientesPorCaixa?caixa=${recebe}`;
  
  return axios.get(url)
    .then((response) => {
      return tabelaCaixa(response.data); //console.log(response.data); // Retorna os dados da resposta
    })
    .catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
    });
}