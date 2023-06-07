
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

function App() {

  const [list, setList] = useState(null)

  useEffect(() => {
    // Si no hay una lista cargada, cargarla
    if (!list) {
      axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
          let data = response.data.results
          // console.log(data)
          setList(data)
        })
        .catch(error => console.log("Error obteniendo lista", error))
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="container py-3 px-5">
        <Outlet context={[list, setList]} />
      </div>
    </>
  )
}

export default App
