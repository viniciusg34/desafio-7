import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Filmes } from './pages/filmes/filmes';
import { Home } from './pages/home/home'
import { Usuario } from './pages/usuario/usuario';
import { Genero } from './pages/generos/genero';
import { ImagenGenero } from './pages/imagenErro/imagenErro'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Rotas = ():JSX.Element =>{

  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Usuario/>} path='/usuario'/>
        <Route element={<Filmes/>} path='/filmes'/>
        <Route element={<Genero/>} path='/genero'/>
        <Route element={<ImagenGenero/>} path='/erro'/>
      </Routes>
    </BrowserRouter>
  )
};

root.render(
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
