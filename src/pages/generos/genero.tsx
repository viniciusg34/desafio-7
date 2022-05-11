import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import theater from '../../assets/images/theater.png'
import { SetStateAction, useEffect, useState } from "react"
import '../../assets/styles/genero/genero.css'
import { apiFilmes } from '../../services/api'
import { Modal } from "../../components/modal/modal"


export const Genero = (props:any):JSX.Element =>{

    let cabecalhoGenero ='Cadastre os gêneros dos filmes'

    // função modal
    const [modal, setModal] = useState('hide')
    const [idGenero, setIdGenero] = useState (0)
    const [nome, setNome] = useState('')
    const abrirFecharModal = (estadoAtual:string, idGenero:number, nome:string) =>{
        if(estadoAtual === 'hide'){
            setModal('Show')
        }
        else{
            setModal('hide')
        }
        setIdGenero(idGenero)
        setNome(nome)
    }

    // listar
    const [genero, setGenero] = useState<any[]>([]);
    const listarGenero = () =>{
        apiFilmes.get('genero')
        .then((resultado: { data: SetStateAction<any[]> }) =>{
            setGenero(resultado.data)
            console.log(resultado.data)
        })
    }
    
    useEffect(()=>{    
        listarGenero()
        },[]
    )

    // Excluir
    const Excluir = (idGenero:number) => {
        if(window.confirm('Deseja realmente excluir o genero?')){
            apiFilmes.delete(`genero/${idGenero}`)
            .then(() => {
                window.location.reload()
            })
        }
    }

    // salvar
    const [inputGenero, setInputGenero] = useState('')
    const salvar = () =>{
        apiFilmes.post('genero', {Genero : inputGenero})
        .then( () =>{
            setInputGenero('')
        })
        .then(() =>{
            window.location.reload()
        })
    }

    // clicar e enviar
    const enter = (event:any) => {
        if (event.key === "Enter") {
            salvar();
        }}

    return(
        <>
            <Modal card={modal} fechar={abrirFecharModal} idGenero={idGenero} nome={nome}/>
            <Header textoHeader={cabecalhoGenero}/>
            <div className="generoMain">
                <div className="centralizarGeneroMain">
                    <div className="alinharTituloGenero">   
                        <h2 className="tituloGenero">Gêneros</h2>
                    </div>
                    <div className="ImagenGenero">
                        <img src={theater} alt="mascaras" />
                    </div>
                    <div>
                        <div className="centralizarSalvarGenero">
                            <div className='salvarGenero'>
                                <p className='textos'>Cadastrar Gênero</p>
                                <input 
                                    type="text" 
                                    placeholder='Digite o genero' 
                                    className='inputGenero' 
                                    value={inputGenero} 
                                    onChange={(estadoInput) => setInputGenero(estadoInput.target.value)} 
                                    onKeyDown={(e) => enter(e)}
                                />
                            </div>
                            <div>
                                <button className='cadastrar' id="enter" onClick={()=> salvar()}>Salvar</button>
                            </div>
                        </div>
                        <div className="cards">

                        {/*map*/}
                        {genero.map((item) => {
                            return(
                                <div className="card">
                                   <div className='card'>
                                        <div className='cardGenero'>
                                            <div className='alinharGenero'>
                                                <p className='genero textoFilme'>{item.Genero}</p>
                                            </div>
                                        </div>
                                        <div className='registroBotoes'>
                                            <button className='botaoEditar' onClick={() => abrirFecharModal(modal, item.idGenero, item.Genero)}>Editar</button>
                                            <button className='botaoExcluir' onClick={() => Excluir(item.idGenero)}>Excluir</button>
                                        </div>
                                    </div>
                                </div>
                             )})}   
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}