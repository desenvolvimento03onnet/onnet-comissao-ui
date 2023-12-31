import styles from "./pageSMS.module.css";
import TabelaSMS from "../../components/SMS/Tabela/TabelaSMS";
import InputNroSMS from "../../components/SMS/Nro/Nro";
import InputDataInicio from "../../components/SMS/DataInicio/DataInicio";
import InputDataFim from "../../components/SMS/DataFim/DataFim";
import ImgLogo from "../../components/SMS/Logo/Logo";
import ButtonLimpar from "../../components/SMS/Limpar/Limpar";
import ButtonVoltar from "../../components/SMS/Voltar/Voltar";
import ButtonPesquisar from "../../components/SMS/Pesquisar/Pesquisar";
import Beta from "../../components/Beta/Beta/Beta";

function pageSMS() {
  
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Esquerda}>
          <ImgLogo />
        </div>
        <div className={styles.Direita}>
          <InputNroSMS />
          <InputDataInicio />
          <InputDataFim />
        </div>
      </div>
      <div className={styles.Meio}>
        <div className={styles.Botoes}>
            <ButtonVoltar />
            <ButtonLimpar />
            <ButtonPesquisar />
          </div>
      </div>
      <div className={styles.Baixo}>
        <TabelaSMS />
      </div>
      <Beta />
    </div>
  );
}

export default pageSMS;