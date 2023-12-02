import styles from "./pageComissaoRenovacao.module.css";
import Logo from "../../components/ComissaoRenovacao/Logo/Logo"
import InputComissaoRecorrenteFrente from "../../components/ComissaoRenovacao/ComissaoRecorrenteFrente/ComissaoRecorrenteFrente";
import InputComissaoRecorrenteTele from "../../components/ComissaoRenovacao/ComissaoRecorrenteTele/ComissaoRecorrenteTele";
import InputComissaoTelFrente from "../../components/ComissaoRenovacao/ComissaoTelFrente/ComissaoTelFrente";
import InputComissaoTelTele from "../../components/ComissaoRenovacao/ComissaoTelTele/ComissaoTelTele";
import InputComissaoTVFrente from "../../components/ComissaoRenovacao/ComissaoTVFrente/ComissaoTVFrente";
import InputComissaoTVTele from "../../components/ComissaoRenovacao/ComissaoTVTele/ComissaoTVTele";
import InputComissaoVendaFrente2 from "../../components/ComissaoRenovacao/ComissaoVendaFrente2/ComissaoVendaFrente2";
import InputComissaoVendaFrente50 from "../../components/ComissaoRenovacao/ComissaoVendaFrente50/ComissaoVendaFrente50";
import InputComissaoVendaTele3 from "../../components/ComissaoRenovacao/ComissaoVendaTele3/ComissaoVendaTele3";
import InputComissaoVendaTele4 from "../../components/ComissaoRenovacao/ComissaoVendaTele4/ComissaoVendaTele4";
import DataInicio from "../../components/ComissaoRenovacao/DataInicio/DataInicio";
import DataFim from "../../components/ComissaoRenovacao/DataFim/DataFim";
import ButtonLimpar from "../../components/ComissaoRenovacao/Limpar/Limpar";
import ButtonVoltar from "../../components/ComissaoRenovacao/Voltar/Voltar";
import ButtonPesquisar from "../../components/ComissaoRenovacao/Pesquisar/Pesquisar";
import TabelaComissaoRenovacao from "../../components/ComissaoRenovacao/Tabela/TabelaComissaoRenovacao";
import Beta from "../../components/Beta/Beta/Beta";

function pageComissaoTotal() {
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Esquerda}>
          <Logo />
        </div>
        <div className={styles.Direita}>
          <div className={styles.Cima}>
            <div className={styles.Parte1}>
              <h1>Valores Frente-Loja</h1>
              <InputComissaoTVFrente />
              <InputComissaoTelFrente />
              <InputComissaoRecorrenteFrente />
              <InputComissaoVendaFrente2 />
              <InputComissaoVendaFrente50 />
            </div>
            <div className={styles.Parte2}>
              <h1>Valores Telemarketing</h1>
              <InputComissaoTVTele />
              <InputComissaoTelTele />
              <InputComissaoRecorrenteTele />
              <InputComissaoVendaTele3 />
              <InputComissaoVendaTele4 />
            </div>
          </div>
          <div className={styles.Baixo}>
            <div className={styles.Datas}>
              <DataInicio />
              <DataFim />
            </div>
          </div>
        </div>
      </div>
          <div className={styles.Botoes}>
            <ButtonVoltar />
            <ButtonLimpar />
            <ButtonPesquisar />
          </div>
      <div className={styles.Baixo}>
        <TabelaComissaoRenovacao />
      </div>
      <Beta />
    </div>
  );
}

export default pageComissaoTotal;