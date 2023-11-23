import styles from "./pageComissaoTotal.module.css";
import TabelaComissaoTotal from "../../components/ComissaoTotal/Tabela/TabelaComissaoTotal";
import InputComissaoVendaTV from "../../components/ComissaoTotal/ComissaoVendaTV/ComissaoVendaTV";
import InputComissaoVendaTel from "../../components/ComissaoTotal/ComissaoVendaTel/ComissaoVendaTel";
import InputComissaoVenda from "../../components/ComissaoTotal/ComissaoVenda/ComissaoVenda";
import InputComissaoVendaRecorrente from "../../components/ComissaoTotal/ComissaoVendaRecorrente/ComissaoVendaRecorrente";
import InputComissaoDia01 from "../../components/ComissaoTotal/ComissaoDia01/ComissaoDia01";
import InputComissaoDia02 from "../../components/ComissaoTotal/ComissaoDia02/ComissaoDia02";
import InputComissaoRenovacaoTVFrente from "../../components/ComissaoTotal/ComissaoRenovacaoTVFrente/ComissaoRenovacaoTVFrente";
import InputComissaoRenovacaoTVTele from "../../components/ComissaoTotal/ComissaoRenovacaoTVTele/ComissaoRenovacaoTVTele";
import InputComissaoRenovacaoTelFrente from "../../components/ComissaoTotal/ComissaoRenovacaoTelFrente/ComissaoRenovacaoTelFrente";
import InputComissaoRenovacaoTelTele from "../../components/ComissaoTotal/ComissaoRenovacaoTelTele/ComissaoRenovacaoTelTele";
import InputComissaoRenovacaoRecorrenteFrente from "../../components/ComissaoTotal/ComissaoRenovacaoRecorrenteFrente/ComissaoRenovacaoRecorrenteFrente";
import InputComissaoRenovacaoRecorrenteTele from "../../components/ComissaoTotal/ComissaoRenovacaoRecorrenteTele/ComissaoRenovacaoRecorrenteTele";
import InputComissaoRenovacaoFrente2 from "../../components/ComissaoTotal/ComissaoRenovacaoFrente2/ComissaoRenovacaoFrente2";
import InputComissaoRenovacaoFrente50 from "../../components/ComissaoTotal/ComissaoRenovacaoFrente50/ComissaoRenovacaoFrente50";
import InputComissaoRenovacaoTele3 from "../../components/ComissaoTotal/ComissaoRenovacaoTele3/ComissaoRenovacaoTele3";
import InputComissaoRenovacaoTele4 from "../../components/ComissaoTotal/ComissaoRenovacaoTele4/ComissaoRenovacaoTele4";
import DataInicio from "../../components/ComissaoTotal/DataInicio/DataInicio";
import DataFim from "../../components/ComissaoTotal/DataFim/DataFim";
import ButtonLimpar from "../../components/ComissaoTotal/Limpar/Limpar";
import ButtonPesquisar from "../../components/ComissaoTotal/Pesquisar/Pesquisar";

function pageComissaoTotal() {
  return (
    <div className={styles.Card}>
      <div className={styles.Cima}>
        <div className={styles.Parte1}>
          <h1>Comissões Vendas</h1>
          <InputComissaoVenda />
          <InputComissaoVendaRecorrente />
          <InputComissaoVendaTV />
          <InputComissaoVendaTel />
          <InputComissaoDia01 />
          <InputComissaoDia02 />
          <DataInicio />
          <DataFim />
        </div>
        <div className={styles.Parte2}>
          <h1>Comissões Renovação Frente-Loja</h1>
          <InputComissaoRenovacaoTVFrente />
          <InputComissaoRenovacaoTelFrente />
          <InputComissaoRenovacaoRecorrenteFrente />
          <InputComissaoRenovacaoFrente2 />
          <InputComissaoRenovacaoFrente50 />
        </div>
        <div className={styles.Parte3}>
        <h1>Comissões Renovação Telemarketing</h1>
          <InputComissaoRenovacaoTVTele />
          <InputComissaoRenovacaoTelTele />
          <InputComissaoRenovacaoRecorrenteTele />
          <InputComissaoRenovacaoTele3 />
          <InputComissaoRenovacaoTele4 />
        </div>
      </div>
      <div className={styles.Botoes}>
            <ButtonLimpar />
            <ButtonPesquisar />
          </div>
      <div className={styles.Baixo}>
        <TabelaComissaoTotal />
      </div>
    </div>
  );
}

export default pageComissaoTotal;