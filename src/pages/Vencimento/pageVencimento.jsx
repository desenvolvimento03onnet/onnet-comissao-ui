import styles from "./pageVencimento.module.css";
import TabelaSMS from "../../components/SMS/Tabela/TabelaSMS";
import InputNroSMS from "../../components/SMS/Nro/Nro";
import InputDataInicio from "../../components/SMS/DataInicio/DataInicio";
import InputDataFim from "../../components/SMS/DataFim/DataFim";
import ImgLogo from "../../components/SMS/Logo/Logo";
import ButtonLimpar from "../../components/SMS/Limpar/Limpar";
import ButtonPesquisar from "../../components/SMS/Pesquisar/Pesquisar";

function pageVencimento() {
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
          <div className={styles.Botoes}>
            <ButtonLimpar />
            <ButtonPesquisar />
          </div>
        </div>
      </div>
      <div className={styles.Baixo}>
        <TabelaSMS />
      </div>
    </div>
  );
}

export default pageVencimento;