import { BrowserRouter, Link, Route, Routes } from 'react-router'
import PageFile from './pages/PageFile'
import PageEmail from './pages/PageEmail'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter basename='/TP3/'>

        <h1>TP3</h1>

        <nav>
          <Link to="/" className='nav-link'>Email</Link>
          <Link to="/File" className='nav-link'>File</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PageEmail />} />
          <Route path="/File" element={<PageFile />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
