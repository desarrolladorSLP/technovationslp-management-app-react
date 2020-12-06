import React from 'react'
import logo from '../assets/logo-10.png'
import ButtonFirebase from "./ButtonFirebase"
import'./NavBar.css'


function NavBar(){

    return <nav><img src={logo} alt="Logo Teckers" ></img>
    <div className="logo-navbar"> <ButtonFirebase></ButtonFirebase></div>
    
    </nav>
}
export default NavBar