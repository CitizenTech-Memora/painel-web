function ListaRemedios({ remedios, onEditar, onExcluir }) {
  if (remedios.length === 0) {
    return <p>Nenhum remédio cadastrado ainda.</p>
  }

  return (
    <ul>
      {remedios.map((remedio) => (
        <li key={remedio.id}>
          <h3>{remedio.nome}</h3>

          <div>
            <p>{remedio.dosagem} · cor {remedio.cor}</p>
            <p>Horários: {remedio.horarios.join(', ')}</p>
            <p>Estoque: {remedio.estoque}</p>
            <p>Temperatura máxima: {remedio.limiteTemperatura} °C</p>
            {remedio.observacao && <p>Observação: {remedio.observacao}</p>}
          </div>

          {!remedio.ativo && (
            <p>
              Pausado: não entra nas doses do dia.
            </p>
          )}

          <div>
            <button type="button" onClick={() => onEditar(remedio)}>Editar</button>
            <button type="button" onClick={() => onExcluir(remedio)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ListaRemedios