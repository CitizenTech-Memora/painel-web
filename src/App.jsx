import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavMenu from './components/NavMenu'
import Hoje from './pages/Hoje'
import Remedios from './pages/Remedios'

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
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
