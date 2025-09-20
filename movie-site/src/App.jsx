import './css/index.css'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Home from './pages/home'
import { MovieProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  )
} 

export default App
