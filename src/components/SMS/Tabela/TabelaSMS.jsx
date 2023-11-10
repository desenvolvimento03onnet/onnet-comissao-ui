import LoadSMS from "../../../services/loadSMS";
import { useState, useEffect } from "react";
import styles from './TabelaSMS.module.css';

function tabelaSMS() {
  const [data, setData] = useState(null);

  useEffect(() => {
    LoadSMS()
      .then((result) => {
        setData(result); // Atualize o estado com os dados retornados
      })
      .catch((error) => {
        console.error("Erro no componente App: ", error);
      });
  }, []); // O segundo argumento vazio garante que isso seja executado apenas uma vez
  
          if (data === null) {
            // Aguarde até que os dados sejam carregados
            return (
              <div className={styles.Spinner}></div>);
          } else {
            return (
              <table className={styles.TabelaFundo}>
                <thead className={styles.Thead}>
                  <tr>
                    <td>Cliente</td>
                    <td>Número do cliente</td>
                    <td>Data de Envio</td>
                  </tr>
                </thead>
                <tbody className={styles.Tbody}>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className={styles.Td}>{item.nome}</td>
                      <td className={styles.Td}>{item.nro}</td>
                      <td className={styles.Td}>{item.data}</td>
                    </tr>
                  ))}
                  </tbody>
              </table>
          );
        }
    
}

export default tabelaSMS;
