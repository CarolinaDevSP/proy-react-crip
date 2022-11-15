import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({id,name, priceUsd, symbol, changePercent24Hr})=> {
    return(
        
        <div className='cripto'> 
           <h2>NOMBRE : {name} </h2> 
            <div className='info'>
                <p><span className='label'>PRECIO : </span> {parseFloat(priceUsd).toFixed(4)}</p>
                <p><span className='label'>CODIGO : </span> {symbol}</p>
                <p>
                    <span className='label'>VARIACION 24H : </span> 
                    <span className={parseFloat(changePercent24Hr) >0 ? "positivo" : "negativo"}>{parseFloat(changePercent24Hr).toFixed(3)}%</span>
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
        
    )
}

export default Cripto