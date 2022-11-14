import { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
function App() {
  const [criptos, setCriptos] = useState()
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(()=>{
    axios.get(`${API_URL}assets`)
    .then((data)=> {
      //console.log(data);
      setCriptos(data.data.data);
    })
    .catch(()=> {
      console.error("la peticion fallo");
    })
  }, [])

  if(!criptos)return <span>Cargando ando ...</span>
  return (
    <>
      <h1>1er proyecto CRIPTOMONEDAS </h1>
      <ol>
        { criptos.map(({id,name,priceUsd}) => (
          <li key={id}>NOMBRE : {name} PRECIO : {priceUsd}</li>
        ))
        }
      </ol>
    </>
  )
}

export default App

