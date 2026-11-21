import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavMenu from './components/NavMenu'
import Hoje from './pages/Hoje'

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
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
