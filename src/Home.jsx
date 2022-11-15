import {Link} from 'react-router-dom'
import "./Home.css"
const Home = () => {
    return(
        <div className="home-container">
            <h1 className="title">Hola bienvenidos a CriptoMarket</h1>
            <p className="subtitle">Conoce las 100 Cripto mas usadas</p>
            <Link to="/criptomonedas" className="link">Ver variedad de Monedas</Link>
        </div>
    )
}

export default Home