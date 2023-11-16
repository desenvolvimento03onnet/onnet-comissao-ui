import axios from 'axios';
import tabelaAtivos from '../components/Ativos/Tabela/TabelaAtivos';

export default function Load(dtFim) {
  
  // Construa a URL com os parâmetros
  const url = `http://localhost:3000/api/QntContratosAtivos?dataFim=${dtFim}`;
  
  return axios.get(url)
    .then((response) => {
      return tabelaAtivos(response.data); //console.log(response.data); // Retorna os dados da resposta
    })
    .catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
    });
}