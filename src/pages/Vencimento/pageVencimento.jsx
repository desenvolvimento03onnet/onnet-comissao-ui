import styles from "./pageVencimento.module.css";
import TabelaVencimento from "../../components/Vencimento/Tabela/TabelaVencimento";
import InputDatasVencimento from "../../components/Vencimento/DatasVencimento/DatasVencimento";
import InputDataInicio from "../../components/Vencimento/DataInicio/DataInicio";
import InputDataFim from "../../components/Vencimento/DataFim/DataFim";
import ImgLogo from "../../components/Vencimento/Logo/Logo";
import ButtonLimpar from "../../components/Vencimento/Limpar/Limpar";
import ButtonVoltar from "../../components/Vencimento/Voltar/Voltar";
import ButtonPesquisar from "../../components/Vencimento/Pesquisar/Pesquisar";

function pageVencimento() {
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Esquerda}>
          <ImgLogo />
        </div>
        <div className={styles.Direita}>
          <InputDatasVencimento />
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
        <TabelaVencimento />
      </div>
    </div>
  );
}

export default pageVencimento;