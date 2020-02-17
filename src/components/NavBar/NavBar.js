import React from 'react'
import logo from '../../assets/logo-10.png'
import ButtonFirebase from "../ButtonFirebase/ButtonFirebase"
import'./NavBar.css'
import Button from '../button/Button'


function NavBar(){

    return <nav>
    <div className="logo-navbar"> 
    <ul>
    <li><img src={logo} alt="Logo Teckers" ></img></li>
    <li><Button text= "Prueba" color="#000000" onClick={  param => console.log("Se presiono el boton")} ></Button></li>
    <li><Button text= "Programas" color="#000000" onClick={  param => console.log("Se presiono el boton")} ></Button> </li>
    <li><Button text= "Usuarios" color="#000000" onClick={  param => console.log("Se presiono el boton")} ></Button></li> 
    <li><Button text= "Otro" color="#000000" onClick={  param => console.log("Se presiono el boton")} ></Button></li>
    <li><ButtonFirebase></ButtonFirebase></li>
    </ul>
    </div>
    </nav>
}
export default NavBar