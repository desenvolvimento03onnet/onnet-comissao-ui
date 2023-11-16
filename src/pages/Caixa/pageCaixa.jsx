import styles from "./pageCaixa.module.css";
import TabelaCaixa from "../../components/Caixa/Tabela/TabelaCaixa";
import InputCaixa from "../../components/Caixa/Caixa/Caixa";
import ImgLogo from "../../components/SMS/Logo/Logo";
import ButtonLimpar from "../../components/Caixa/Limpar/Limpar";
import ButtonPesquisar from "../../components/Caixa/Pesquisar/Pesquisar";

function pageCaixa() {
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Esquerda}>
          <ImgLogo />
        </div>
        <div className={styles.Direita}>
          <InputCaixa />
          <div className={styles.Botoes}>
            <ButtonLimpar />
            <ButtonPesquisar />
          </div>
        </div>
      </div>
      <div className={styles.Baixo}>
        <TabelaCaixa />
      </div>
    </div>
  );
}

export default pageCaixa;