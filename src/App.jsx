import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavMenu from './components/NavMenu'
import Hoje from './pages/Hoje'
import Remedios from './pages/Remedios'
import RedeCuidado from './pages/RedeCuidado'
import LembreteVoz from './pages/LembreteVoz'
import Historico from './pages/Historico'
import Alertas from './pages/Alertas'

function App() {
  return (
    <div>
      <aside>
        <Header />
        <NavMenu />
      </aside>

      <main>
        <div>
          <Routes>
            <Route path="/" element={<Hoje />} />
            <Route path="/remedios" element={<Remedios />} />
            <Route path="/rede-de-cuidado" element={<RedeCuidado />} />
            <Route path="/lembrete-de-voz" element={<LembreteVoz />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/alertas" element={<Alertas />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
