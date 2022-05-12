import { Link } from 'react-router-dom';
import stonks from '../../assets/images/stonks.jpeg'
import '../../assets/styles/imagenErro/imagenErro.css'

export const ImagenGenero = (props:any):JSX.Element =>{

    return(
        <>
            <div className="centralizarPagina">
                <div className='pagina'>
                    <p className='textoPrimario'>Ops</p>
                    <img src={stonks} alt="imagen de erro" className='stonks' />
                    <p className='textoSecundario'>Pagina em construção</p>
                    <button className="transparent"><Link className="voltarHome textoSecundario" to='/'>👉 clique aqui para voltar a pagina Home👈</Link></button>
                </div>
            </div>
        </>
    );
}
