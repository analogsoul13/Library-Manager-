import './App.css'
import Collections from './pages/Collections'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Edit from './pages/Edit'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/collections" element={<Collections/>}/>
      <Route exact path="/edit/:id" element={<Edit/>}/>
    </Routes>
    <ToastContainer/>
    <Footer />
    </>
  )
}

export default App
