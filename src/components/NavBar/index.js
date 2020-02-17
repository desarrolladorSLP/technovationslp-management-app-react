import React from 'react'
import logo from '../../assets/logo-10.png'
import ButtonFirebase from "../ButtonFirebase"
import './NavBar.scss'
import Button from '../button'


function NavBar() {

    return <nav className="navbar-container">
        <img src={logo} alt="Logo Teckers" />
        <ul className="navbar-list">
            <li><Button text="Prueba" color="#000000" onClick={param => console.log("Se presiono el boton")} ></Button></li>
            <li><Button text="Programas" color="#000000" onClick={param => console.log("Se presiono el boton")} ></Button> </li>
            <li><Button text="Usuarios" color="#000000" onClick={param => console.log("Se presiono el boton")} ></Button></li>
            <li><Button text="Otro" color="#000000" onClick={param => console.log("Se presiono el boton")} ></Button></li>
            <li><ButtonFirebase></ButtonFirebase></li>
        </ul>
    </nav>
}
export default NavBar