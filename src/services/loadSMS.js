import axios from 'axios';
import tabelaSMS from '../components/SMS/Tabela/TabelaSMS';

export default function Load(nro, dtInicio, dtFim) {

  // Construa a URL com os parâmetros
  const url = `http://localhost:3000/api/SMSNumero?numeroCel=${nro}&dataInicio=${dtInicio}&dataFim=${dtFim}`;

  return axios.get(url)
    .then((response) => {
      return tabelaSMS(response.data); //console.log(response.data); // Retorna os dados da resposta
    })
    .catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
    });
}