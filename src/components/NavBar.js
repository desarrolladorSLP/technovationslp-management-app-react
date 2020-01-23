import React from 'react'
import logo from '../assets/logo-10.png'
import'./NavBar.css'

function NavBar(){

    return <nav><img src={logo} alt="Logo Teckers" ></img>
    <div className="logo-navbar"> <button>Google Login</button></div>
    
    </nav>
}
export default NavBar