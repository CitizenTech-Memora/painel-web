function GravadorVoz({ horario, periodo, audio, gravando, ocupado, onGravar, onParar, onApagar }) {
  return (
    <article
      data-gravando={gravando}
    >
      <h3>Remédio da {periodo} · {horario}</h3>

      {gravando && (
        <div>
          <p role="status">
            <span aria-hidden="true" />
            Gravando... fale a mensagem para ela.
          </p>
          <button type="button" onClick={onParar}>
            Parar gravação
          </button>
        </div>
      )}

      {!gravando && !audio && (
        <div>
          <p>Ainda não tem lembrete gravado para este horário.</p>
          <button type="button" onClick={() => onGravar(horario)} disabled={ocupado}>
            Gravar lembrete
          </button>
        </div>
      )}

      {!gravando && audio && (
        <div>
          <audio controls src={audio} aria-label={`Lembrete das ${horario}`} />
          <div>
            <button type="button" onClick={() => onGravar(horario)} disabled={ocupado}>
              Regravar
            </button>
            <button type="button" onClick={() => onApagar(horario)} disabled={ocupado}>
              Apagar
            </button>
          </div>
        </div>
      )}
    </article>
  )
}

export default GravadorVoz