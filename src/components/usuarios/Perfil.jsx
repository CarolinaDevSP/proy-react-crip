import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Perfil = () => {
    const usuario = useContext(UserContext)
    return(
        <div>
            <div>Mi perfil de {usuario.name}</div>
            <div>
                Usuario desde: {usuario.registered}
            </div>
        </div>
    )
}

export default Perfil