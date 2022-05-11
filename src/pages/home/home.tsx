import cinema from '../../assets/images/cinema.png'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import theater from '../../assets/images/theater.png'
import '../../assets/styles/home/home.css'

export const Home = ():JSX.Element =>{

    let cabecalhoHome ='Conheça nossa Coletânea'

    return(
        <>
            <Header textoHeader={cabecalhoHome}/>
            <div className="homeMain">
                <div className='centralizarTextos'>
                    <div className='centralizarTitulo'>
                        <h1 className='titulo'>Monte sua coletânea de filmes...</h1>
                    </div>
                    <div className='centralizarLoremPrincipal'>
                        <p className='loremPrincipal'>
                            <span className='loremIp'>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                            </span>
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. 
                        </p>
                    </div>
                </div>
                <div className='info'>
                    <div className='centralizarInfo'>
                        <div className='infoEsquerda'>
                            <div>
                                <img src={cinema} alt="rolo de filmes" />
                            </div>
                            <div>
                                <h3 className='filmes'>Filmes</h3>
                                <p className='LoremInfo'>
                                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. 
                                </p>
                            </div>
                        </div>
                        <div className='infoDireita'>
                            <div>
                                <img src={theater} alt="mascaras" />
                            </div>
                            <div>
                                <h3 className='categoria'>Categoria</h3>
                                <p className='LoremInfo'>
                                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Home