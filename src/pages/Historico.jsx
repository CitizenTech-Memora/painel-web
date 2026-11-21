import useRemedios from '../hooks/useRemedios'
import useEventos from '../hooks/useEventos'
import useAdesao from '../hooks/useAdesao'
import CalendarioAdesao from '../components/CalendarioAdesao'
import Carregando from '../components/Carregando'
import MensagemErro from '../components/MensagemErro'
import { formatarData } from '../utils/datas'

function textoTempoResposta(minutos) {
  if (minutos === null) {
    return 'Nenhum aviso foi visto nesta semana.'
  }
  if (minutos === 1) {
    return '1 minuto'
  }
  return `${minutos} minutos`
}

function Historico() {
  const remediosApi = useRemedios()
  const eventosApi = useEventos()
  const adesao = useAdesao(eventosApi.eventos, remediosApi.remedios)

  const carregando = remediosApi.carregando || eventosApi.carregando
  const primeiroDia = adesao.dias[0].data
  const ultimoDia = adesao.dias[adesao.dias.length - 1].data

    return (
    <section>
      <h2>Histórico</h2>

      <MensagemErro mensagem={remediosApi.erro} />
      <MensagemErro mensagem={eventosApi.erro} />

      <div>
        <p>
          Semana de {formatarData(primeiroDia)} a {formatarData(ultimoDia)}
        </p>
        <div>
          <button type="button" onClick={adesao.semanaAnterior}>
            Semana anterior
          </button>
          <button type="button" onClick={adesao.proximaSemana} disabled={adesao.ehSemanaAtual}>
            Próxima semana
          </button>
        </div>
      </div>

      {carregando && <Carregando texto="Carregando o histórico..." />}

      {!carregando && (
        <>
          <div>
            <h3>Adesão da semana</h3>
            <p>{adesao.taxaSemana}%</p>
            <p>
              É a parte das doses que saiu da caixa até 20 minutos depois do horário.
            </p>
          </div>

          <CalendarioAdesao dias={adesao.dias} />

          <div>
            <h3>Outros números da semana</h3>
            <ul>
              <li>
                <span>Doses que não saíram da caixa</span>
                <strong>{adesao.perdidas}</strong>
              </li>
              <li>
                <span>Tentativas de abrir fora de hora</span>
                <strong>{adesao.foraDeHora}</strong>
              </li>
              <li>
                <span>Avisos de temperatura alta</span>
                <strong>{adesao.alertasTemperatura}</strong>
              </li>
              <li>
                <span>Tempo médio até alguém ver o aviso</span>
                <strong>{textoTempoResposta(adesao.tempoResposta)}</strong>
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  )
}

export default Historico
