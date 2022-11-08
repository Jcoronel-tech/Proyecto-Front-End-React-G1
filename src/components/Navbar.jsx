import { React } from 'react';
import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#"><h1>CLipStore</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <NavLink className={ setActiveClass } to="/"> 
            <h4>Home</h4> 
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={ setActiveClass } to="/Perfil">
              <h4>Mi Perfil</h4>
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={ setActiveClass } to="/src/components/NotFound.jsx">
              <h4>Mis Favoritos</h4>
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={ setActiveClass } to="/src/components/NotFound.jsx">
              <h4>Mis Publicaciones</h4>
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={ setActiveClass } to="/src/components/NotFound.jsx">
              <h4>Cerrar Sesión</h4>
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
