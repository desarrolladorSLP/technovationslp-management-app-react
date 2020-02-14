import React from 'react'
import logo from '../../assets/logo-10.png'
import ButtonFirebase from "../ButtonFirebase"
import'./NavBar.css'
import Button from '../button/Button'


function NavBar(){

    return <nav><img src={logo} alt="Logo Teckers" ></img>
    <div className="logo-navbar"> 
    <Button text= "Prueba" color="#000000" onClick={  param => console.log("Se presiono el boton")} ></Button>
    <Button text= "Programas" color="#000000" onClick={  param => console.log("Se presiono el boton")} ></Button> 
    <Button text= "Usuarios" color="#000000" onClick={  param => console.log("Se presiono el boton")} ></Button> 
    <Button text= "Otro" color="#000000" onClick={  param => console.log("Se presiono el boton")} ></Button>
    <ButtonFirebase></ButtonFirebase>  </div>
    
    
    </nav>
}
export default NavBar