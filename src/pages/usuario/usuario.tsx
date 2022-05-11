import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import '../../assets/styles/usuario/usuario.css'
import { Link } from 'react-router-dom'


export const Usuario = (props:any):JSX.Element =>{
    
    let cabecalhoUsuario ='Faça o Cadastro de usuários e  edite, caso necessário Pronto para cadastrar?'

    return(
        <>
            <Header textoHeader={cabecalhoUsuario}/>
            <div className='mainUsuario'>
                <div className='centralizarUsuario'>
                    <div className='tituloUsuario'>
                        <h2 className='cadastro'>Cadastro</h2>
                    </div>
                    <section className='inputUsuario'>
                            <div className='inputNome'>
                                <p className='textos'>Nome</p>
                                <input type="text"  className='inputs'/>
                            </div>
                            <div className='inputEmail'>
                                <p className='textos'>E-mail</p>
                                <input type="text" className='inputs'/>
                            </div>
                            <div className='inputTelefone'>
                                <p className='textos'>Telefone</p>
                                <input type="text" className='inputs'/>
                            </div>
                    </section>
                    <div>
                        <button className='cadastrar'>Cadastrar</button>
                    </div>
                    <section className='painelRegistros'>
                        <div className='registros'>
                            <div className='registroNome'>
                                <p className='nome'>Paulo</p>
                            </div>
                            <div className='registroContato'>
                                <div className='alinharRegistro'>
                                    <p className='email'>paulo@email.com</p>
                                    <p className='telefone'>3349 6788</p>
                                </div>
                            </div>
                            <div className='registroBotoes'>
                                <button className='botaoEditar'><Link className="links linkUsuario" to='/erro'>Editar</Link></button>
                                <button className='botaoExcluir'>Excluir</button>
                            </div>
                        </div>
                        <div className='registros'>
                            <div className='registroNome'>
                                <p className='nome'>Marcos Lucio</p>
                            </div>
                            <div className='registroContato'>
                                <div className='alinharRegistro'>
                                    <p className='email'>marcos@email.com</p>
                                    <p className='telefone'>3349 6788</p>
                                </div>
                            </div>
                            <div className='registroBotoes'>
                                <button className='botaoEditar'><Link className="links linkUsuario" to='/erro'>Editar</Link></button>
                                <button className='botaoExcluir'>Excluir</button>
                            </div>
                        </div>
                        <div className='registros'>
                            <div className='registroNome'>
                                <p className='nome'>Paulo</p>
                            </div>
                            <div className='registroContato'>
                                <div className='alinharRegistro'>
                                    <p className='email'>laura@email.com</p>
                                    <p className='telefone'>3349 6788</p>
                                </div>
                            </div>
                            <div className='registroBotoes'>
                                <button className='botaoEditar'><Link className="links linkUsuario" to='/erro'>Editar</Link></button>
                                <button className='botaoExcluir'>Excluir</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    )
}