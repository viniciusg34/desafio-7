import { Link } from "react-router-dom";
import logo from"../../assets/images/logo.png"
import '../../assets/styles/header/header.css'

const Header= (props:any):JSX.Element =>{
    return(
        <>
            <div className="cabecalho">
                <div className="centralizarCabecalho">
                    <div className="cabecalhoEsquerda"> 
                        <div className="logo">
                            <img src={logo} alt="logo" className="logo" />
                        </div> 
                        <div className="textoLogo">
                            <div className="tituloHeader">
                                <h2 className="titulos">{props.textoHeader}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="cabecalhoDireita">
                        <button className="botao transparent"><Link className="links" to='/'>Home</Link></button>
                        <button className="botao transparent"><Link className="links" to='/usuario'>Usuários</Link></button>
                        <button className="botao transparent"><Link className="links" to='/filmes'>Filmes</Link></button>
                        <button className="botao transparent"><Link className="links" to='/genero'>Gênero</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header