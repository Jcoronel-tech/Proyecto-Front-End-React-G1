import React from "react";
import CardPublic from "./CardPublic";
import perfil from '../assets/img/perfil.gif'

const CardDetalles = ({data}) => {
  
  return (
    <div className='container'>
      <div className="row m-3">
        <h2 >Mi Perfil</h2>
        <h4><span><img src={perfil} alt="" width="50" height="50"/></span> Mi Avatar</h4>
      </div>
      <div className="row m-3">
        <h2>Publicar</h2>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"> Titulo de Publicación</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Agregar Titulo de Publicación"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Agregar Descripción de Publicación</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">Default file input example</label>
          <input class="form-control" type="file" id="formFile"/>
        </div>
        <button type="button" className="btn btn-secondary">Agregar Publicación</button>
      </div>
      <div className="row m-3">
        <h2>Publicaciones</h2>
        {data.map((p, i)=>(
          <CardPublic datos={p} key={i}></CardPublic>
        ))}
      </div>
    </div>
  )
}

export default CardDetalles
