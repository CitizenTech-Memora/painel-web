function Carregando({ texto = 'Carregando...' }) {
  return (
    <p role="status">
      <span 
      aria-hidden="true" />
      {texto}
    </p>
  )
}

export default Carregando
