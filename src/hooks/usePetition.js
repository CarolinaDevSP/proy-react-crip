import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endpoint) => {
    const API_URL = import.meta.env.VITE_API_URL
    
    const [cripto, setCripto] = useState() //construimos el estado   
    const [cargando, setCargando] = useState(false)

    useEffect(()=> { //useEffect
        setCargando(true)

        axios.get(`${API_URL}${endpoint}`)
        .then(data => { 
            setCripto(data.data.data)
            setCargando(false)
    })
        .catch(e => {
            setCargando(false)
            console.error(e)})
    },[]) 

    return [cripto, cargando]
}

export default usePetition