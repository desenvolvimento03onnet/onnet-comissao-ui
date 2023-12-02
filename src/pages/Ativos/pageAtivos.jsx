import styles from "./pageAtivos.module.css";
import TabelaAtivos from "../../components/Ativos/Tabela/TabelaAtivos";
import InputDataFim from "../../components/Ativos/DataFim/DataFim";
import ImgLogo from "../../components/SMS/Logo/Logo";
import ButtonLimpar from "../../components/Ativos/Limpar/Limpar";
import ButtonVoltar from "../../components/Ativos/Voltar/Voltar";
import ButtonPesquisar from "../../components/Ativos/Pesquisar/Pesquisar";
import Beta from "../../components/Beta/Beta/Beta";

function pageAtivos() {
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Esquerda}>
          <ImgLogo />
        </div>
        <div className={styles.Direita}>
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
        <TabelaAtivos />
      </div>
      <Beta />
    </div>
  );
}

export default pageAtivos;