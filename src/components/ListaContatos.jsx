function ListaContatos({ contatos, onEditar, onExcluir, onSubir, onDescer, onAlternarWhatsapp }) {
  if (contatos.length === 0) {
    return <p>Nenhum contato cadastrado ainda.</p>
  }

  return (
    <ol>
      {contatos.map((contato, indice) => (
        <li key={contato.id}>
          <p>
            <span>Posição na fila: </span>
            {indice + 1}º
          </p>

          <div>
            <h3>{contato.nome}</h3>
            <div>
              <p>{contato.parentesco}</p>
              <p>WhatsApp: {contato.whatsapp}</p>
              {contato.autorizaWhatsapp && <p>Recebe aviso pelo WhatsApp.</p>}
              {!contato.autorizaWhatsapp && <p>Não recebe aviso pelo WhatsApp, só no painel.</p>}
            </div>

            {!contato.ativo && (
              <p>
                Pausado: fica fora da fila de avisos.
              </p>
            )}

            <div>
              <button type="button" onClick={() => onSubir(contato)} disabled={indice === 0}>
                Subir na fila
              </button>
              <button type="button" onClick={() => onDescer(contato)} disabled={indice === contatos.length - 1}>
                Descer na fila
              </button>
              <button type="button" onClick={() => onAlternarWhatsapp(contato)}>
                {contato.autorizaWhatsapp ? 'Desligar WhatsApp' : 'Ligar WhatsApp'}
              </button>
              <button type="button" onClick={() => onEditar(contato)}>Editar</button>
              <button type="button" onClick={() => onExcluir(contato)}>Excluir</button>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default ListaContatos