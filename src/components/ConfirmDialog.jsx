function ConfirmDialog({ mensagem, textoConfirmar, onConfirmar, onCancelar }) {
  return (
    <div>
      <div
        role="alertdialog"
        aria-modal="true"
        aria-label="Confirmação"
      >
        <p>{mensagem}</p>
        <div>
          <button type="button" onClick={onCancelar}
            autoFocus>Cancelar</button>
          <button type="button" onClick={onConfirmar}>{textoConfirmar}</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog