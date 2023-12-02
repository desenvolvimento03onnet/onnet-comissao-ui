import styles from "./pageComissaoVenda.module.css";
import Logo from "../../components/ComissaoVenda/Logo/Logo"
import InputComissaoTV from "../../components/ComissaoVenda/ComissaoTV/ComissaoTV";
import InputComissaoTel from "../../components/ComissaoVenda/ComissaoTel/ComissaoTel";
import InputComissaoVenda from "../../components/ComissaoVenda/ComissaoRecorrente/ComissaoRecorrente";
import InputComissaoRecorrente from "../../components/ComissaoVenda/ComissaoVenda/ComissaoVenda";
import InputComissaoDia01 from "../../components/ComissaoVenda/ComissaoDia01/ComissaoDia01";
import InputComissaoDia02 from "../../components/ComissaoVenda/ComissaoDia02/ComissaoDia02";
import DataInicio from "../../components/ComissaoVenda/DataInicio/DataInicio";
import DataFim from "../../components/ComissaoVenda/DataFim/DataFim";
import ButtonLimpar from "../../components/ComissaoVenda/Limpar/Limpar";
import ButtonVoltar from "../../components/ComissaoVenda/Voltar/Voltar";
import ButtonPesquisar from "../../components/ComissaoVenda/Pesquisar/Pesquisar";
import TabelaComissaoVenda from "../../components/ComissaoVenda/Tabela/TabelaComissaoVenda";
import Beta from "../../components/Beta/Beta/Beta";

function pageComissaoTotal() {
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Esquerda}>
          <Logo />
        </div>
        <div className={styles.Direita}>
          <div className={styles.Parte1}>
            <InputComissaoTel />
            <InputComissaoTV />
            <InputComissaoVenda />
            <InputComissaoRecorrente />
          </div>
          <div className={styles.Parte2}>
            <InputComissaoDia01 />
            <InputComissaoDia02 />
            <DataInicio />
            <DataFim />
          </div>
        </div>
      </div>
          <div className={styles.Botoes}>
            <ButtonVoltar />
            <ButtonLimpar />
            <ButtonPesquisar />
          </div>
      <div className={styles.Baixo}>
        <TabelaComissaoVenda />
      </div>
      <Beta />
    </div>
  );
}

export default pageComissaoTotal;