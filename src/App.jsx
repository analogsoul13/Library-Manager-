import './App.css'
import Collections from './pages/Collections'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/collections" element={<Collections/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
