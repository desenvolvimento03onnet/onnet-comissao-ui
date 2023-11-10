import axios from 'axios';

const dataToSend = {
  numeroCel: '%88085509',
  dataInicio: '01/10/2023',
  dataFim: '06/11/2023'
};

export default function Load() {
  const { numeroCel, dataInicio, dataFim } = dataToSend;

  // Construa a URL com os parâmetros
  const url = `http://localhost:3000/api/SMSNumero?numeroCel=${numeroCel}&dataInicio=${dataInicio}&dataFim=${dataFim}`;

  return axios.get(url)
    .then((response) => {
      return response.data; // Retorna os dados da resposta
    })
    .catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
    });
}