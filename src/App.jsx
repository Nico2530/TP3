import { Link, Route, Routes } from 'react-router'
import PageFile from './pages/PageFile'
import PageEmail from './pages/PageEmail'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>TP3</h1>

        <nav>
          <Link to="/" className='nav-link'>Email</Link>
          <Link to="/File" className='nav-link'>File</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<PageEmail />} />
          <Route path="/File" element={<PageFile />} />
        </Routes>
      </main>
    </>
  )
}

export default App
