import { useState } from 'react'
import './App.css'
import MovieCard  from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MovieCard movie={{title: "Bob", release_date: "2024"}} />
      <MovieCard movie={{title: "Jack", release_date: "2023"}} />
    </div>
  )
} 

export default App
