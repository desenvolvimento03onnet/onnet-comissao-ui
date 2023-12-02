import styles from "./pageCaixa.module.css";
import TabelaCaixa from "../../components/Caixa/Tabela/TabelaCaixa";
import InputCaixa from "../../components/Caixa/Caixa/Caixa";
import ImgLogo from "../../components/SMS/Logo/Logo";
import ButtonLimpar from "../../components/Caixa/Limpar/Limpar";
import ButtonVoltar from "../../components/Caixa/Voltar/Voltar";
import ButtonPesquisar from "../../components/Caixa/Pesquisar/Pesquisar";
import Beta from "../../components/Beta/Beta/Beta";

function pageCaixa() {
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Esquerda}>
          <ImgLogo />
        </div>
        <div className={styles.Direita}>
          <InputCaixa />
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
        <TabelaCaixa />
      </div>
      <Beta />
    </div>
  );
}

export default pageCaixa;