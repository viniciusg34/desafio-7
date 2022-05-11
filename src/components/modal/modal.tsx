import { apiFilmes } from '../../services/api'
import '../../assets/styles/modal/modal.css'
import { useEffect, useState } from 'react'

export const Modal = (props:any):JSX.Element =>{

    const [generoModal, setGeneroModal] = useState ('')
    const edit = (id:any) =>{
        apiFilmes.put(`genero/${id}`, {Genero : generoModal})
            .then(() =>{
                window.location.reload()
            })
    }

    useEffect(() => {
        setGeneroModal(props.nome)
    },[props.nome])

    const enter = (event:any) => {
        if (event.key === "Enter") {
            edit(props.idGenero);
        }}

    return(
        <>
            <div className="centralizarModalGenero">
                <div className={`escurecer ${props.card}`}></div>
                <div className={`modalFilmes ${props.card}`}>
                    <div className="faixaAzul">
                        <p onClick={props.fechar} className='fechar'>X</p>
                    </div>
                    <div className="centralizarSalvarGenero centralizarSalvarGeneroModal">
                        <div className='salvarGenero'>
                            <p className='textos'>Editar o Gênero</p>
                            <input 
                                type="text"  
                                className='inputGenero' 
                                defaultValue={generoModal}
                                onChange={(e) => setGeneroModal(e.target.value)} 
                                onKeyDown={(e) => enter(e)} 
                            />
                        </div>
                        <div>
                            <button className='cadastrar' id='enter' onClick={() => edit(props.idGenero)}>Salvar</button>
                        </div>
                    </div>   
                    <div className="faixaLaranja"></div>
                </div>
            </div>
        </>
    );
}