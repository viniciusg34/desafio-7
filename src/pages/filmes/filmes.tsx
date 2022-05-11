import '../../assets/styles/filmes/filmes.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import cinema from '../../assets/images/cinema.png'
import { useEffect, useState } from "react"
import { apiFilmes } from '../../services/api'
import { ModalFilmes } from '../../components/modalFilmes/modalFilmes'

export const Filmes = ():JSX.Element =>{
    
    let cabecalhoFilmes:string = 'Cadastre os filmes de sua preferência '

    const [genero, setGenero] = useState<any[]>([]);
    const [filmes, setFilme] = useState<any[]>([]);

    const listarGenero = () =>{
        apiFilmes.get('genero')
            .then(resultado =>{
                setGenero(resultado.data)
            })
    }

    useEffect(() => {
        listarGenero()
    }, []);

    useEffect(() => {
        let quantidadeElementos: number = genero.length;

        for (let index = 0; index < quantidadeElementos; index++) {
            apiFilmes.get(`genero/${index + 1}/filmes`)
                .then(resultado => {
                    setFilme(filmes => filmes.concat(resultado.data))
                });
        }
    },  [genero.length]);

    useEffect(() => {
        console.log(filmes)
    },  [filmes]);

    const Excluir = (idGenero:number,idFilme:number) => {
        if (window.confirm('Tem certeza deseja realmente excluir o Filme?')) {
           apiFilmes.delete(`/genero/${idGenero}/filmes/${idFilme}`)
               .then(() => {
                   window.location.reload()
               })
       }
    }

    const [idGenero, setIdGenero] = useState(0)
    const [titulo, setTitulo] = useState('')
    const salvarTitulo = (idGenero:any) =>{

        apiFilmes.post(`genero/${idGenero}/filmes`, { filmes : titulo })
            .then(() => setTitulo(''))
            .then(() =>{
                window.location.reload()
            })
    }

    const [idFilme, setIdFilme] = useState (0)
    const [nomeFilme, setNomeFilme] = useState ('')
    const [modal, setModal] = useState('hide')
    const abrirFecharModal = (estadoAtual:string, idGenero:number, idFilme:number, nomeFilme:string, generoFilme:number) =>{
        if(estadoAtual === 'hide'){
            setModal('Show')
        }
        else{
            setModal('hide')
        }
        setIdGenero(idGenero)
        setIdFilme(idFilme)
        setNomeFilme(nomeFilme)
    }

    const enter = (event:any) => {
        if (event.key === "Enter") {
            salvarTitulo(idGenero);
        }}

    return(
        <>
            <ModalFilmes card={modal} fechar={abrirFecharModal} idGenero={idGenero} idFilme={idFilme} nomeFilme={nomeFilme}/>  
            <Header textoHeader={cabecalhoFilmes}/>  
            <div className='filmesMain'>
                <div className='mainFilmes'>
                    <div className='centralizarTituloFilmes'>
                        <h2 className='tituloFilmes'>Filmes</h2>
                    </div>
                    <div className='cinema'>
                        <img src={cinema} alt="rolo de filmes" />
                    </div>
                    <div className='inputCadastrarFilme'>
                        <div className='inputFilmes'>
                            <p className='textos textosFilmes'>Cadastrar Filmes</p>
                            <input type="text"
                                placeholder='Título do Filme' 
                                className='inputTitulo inputTituloFilme' 
                                value={titulo} onChange={(estadoInput) => setTitulo (estadoInput.target.value)}
                                onKeyDown={(e) => enter(e)}
                            />
                        </div>
                        <div className='inputFilmes2'>
                            <select name="genero" id="genero" className='generoFilme' onChange={(select) => setIdGenero(Number(select.target.value))}>
                                <option value="" hidden selected>Genêros</option>
                                {genero.map((item):any => {
                                    return(
                                        <option value={item.idGenero}>{item.Genero}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <button className='cadastrar' id="enter" onClick={() =>{salvarTitulo(idGenero)}}>Salvar</button>
                        </div>
                    </div>
                    <div className='cards'>
                    {filmes.map((item)=> {
                            return(
                                <div className="card">
                                    <div >                                    
                                        <p className="filme textofilme">{item.filmes}</p>
                                    </div>
                                    <div>
                                        <p className='genero textoFilme'>{item.genero.Genero}</p>
                                    </div>
                                    <div className='registroBotoes'>
                                        <button className='botaoEditar' onClick={() => abrirFecharModal(modal,item.genero.idGenero, item.idFilme, item.filmes, item.genero.Genero)}>Editar</button>
                                        <button className='botaoExcluir' onClick={() => Excluir(item.genero.idGenero, item.idFilme)}>Excluir</button>
                                    </div>
                                </div>
                             )})}   
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}