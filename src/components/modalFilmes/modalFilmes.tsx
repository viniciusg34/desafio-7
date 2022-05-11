import { useState, useEffect, SetStateAction } from "react"
import { apiFilmes } from '../../services/api'
import '../../assets/styles/modalFilmes/modalFilmes.css'

export const ModalFilmes = (props:any):JSX.Element =>{

    const [filmeModal, setFilmeModal] = useState ('')
    const [select, setSelect] = useState ('')

    const edit = (idFilme:any,idGenero:any) =>{
        apiFilmes.put(`genero/${idGenero}/filmes/${idFilme}`, {filmes : filmeModal, generoId : select})
        .then(() => window.location.reload())
        console.log(idGenero)
    }

    const [genero, setGenero] = useState<any[]>([]);
    const listarGenero = () =>{
        apiFilmes.get('genero')
            .then((resultado: { data: SetStateAction<any[]> }) =>{
                setGenero(resultado.data)
            })
    }

    useEffect(() => {
        listarGenero()
    }, []);

    const enter = (event:any) => {
    if (event.key === "Enter") {
        edit(props.idFilme, select);
    }}

    useEffect(() => {
        setFilmeModal(props.nomeFilme)
    },[props.nomeFilme])

    return(
        <>
            <div className={`escurecer ${props.card}`}></div>
            <div className="centralizarModalFilmes">
                <div className={`modalFilmes ${props.card}`}>
                    <div className="faixaAzul">
                        <p onClick={props.fechar} className='fechar'>X</p>
                    </div>
                    <div className="centralizarInputsModalFilmes">
                        <div className='inputFilmes'>
                            <p className='textos'>Editar o Filme</p>
                            <input 
                                type="text" 
                                placeholder='Título do Filme' 
                                className='inputTitulo' 
                                defaultValue={filmeModal} 
                                onChange={(estado) => setFilmeModal(estado.target.value)}
                                onKeyDown={(e) => enter(e)}
                            />
                        </div>
                        <div className='inputFilmes2'>
                            <select name="genero" id="genero" className='generoFilme' onChange={(estado) => setSelect(estado.target.value)} defaultValue={props.idGenero}>
                                {genero.map((item):any => {
                                    return(
                                        <option value={item.idGenero}>{item.Genero}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <button className='cadastrar' id="enter" onClick={() => edit(props.idFilme, select)}>Salvar</button>
                        </div>
                    </div>
                    <div className="faixaLaranja"></div>
                </div>
            </div>
        </>
    );
}