
import { useParams } from "react-router-dom"
import usePetition from "../../hooks/usePetition"
import "./CriptoPage.css"
import CriptoHistory from "./info/CriptoHistorial"
import CriptoInfo from "./info/CriptoInfo"

const CriptoPage = () =>{
    //const API_URL = import.meta.env.VITE_API_URL
    const params = useParams() //HOOK de reacr router dom que devuelve los paratros de la url
/*
    const [cripto, setCripto] = useState({}) //estado   
    useEffect(()=> { //useEffect
        axios.get(`${API_URL}assets/${params.id}`)
        .then(data => setCripto(data.data.data) )
        .catch(e => console.error(e))
    },[]) 

    const [history, setHistory] = useState([])
     useEffect(()=> {  
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then(data => setHistory(data.data.data) )
        .catch(e => console.error(e))
        
    },[])*/

    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
    const [history, cargandoHistory]= usePetition(`assets/${params.id}/history?interval=d1`)

    if (cargandoCripto || cargandoHistory) return <span> Cargando...</span>
    return(
        <div className="cripto-page-container">
         { cripto && <CriptoInfo cripto={cripto} />}
         { history && <CriptoHistory history={history} />}   
        </div>
    )
}

export default CriptoPage