import styles from "./pageAtivos.module.css";
import TabelaAtivos from "../../components/Ativos/Tabela/TabelaAtivos";
import InputDataFim from "../../components/Ativos/DataFim/DataFim";
import ImgLogo from "../../components/SMS/Logo/Logo";
import ButtonLimpar from "../../components/Ativos/Limpar/Limpar";
import ButtonPesquisar from "../../components/Ativos/Pesquisar/Pesquisar";

function pageAtivos() {
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Esquerda}>
          <ImgLogo />
        </div>
        <div className={styles.Direita}>
          <InputDataFim />
          <div className={styles.Botoes}>
            <ButtonLimpar />
            <ButtonPesquisar />
          </div>
        </div>
      </div>
      <div className={styles.Baixo}>
        <TabelaAtivos />
      </div>
    </div>
  );
}

export default pageAtivos;