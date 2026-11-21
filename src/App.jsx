import { Routes } from 'react-router-dom'
import Header from './components/Header'
import NavMenu from './components/NavMenu'

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
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
