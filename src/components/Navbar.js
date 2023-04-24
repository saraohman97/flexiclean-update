import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>
                <img className='nav-logo' src={logo} alt="logotype flexiclean blue gray grey logo" />
            </NavLink>

            <div className="nav-link btn-meny">
                <strong>Meny</strong>
            </div>
            
            <div className="nav-links">
                <NavLink to='/produkter' className='nav-link'>Produkter <AiOutlineDown /></NavLink>
                <NavLink to='/dokumentcenter' className='nav-link'>Documentcenter</NavLink>
                <NavLink to='/kontakta-oss' className='nav-link'>Kontakta oss</NavLink>
                <button className='btn btn-gray'>Beställ</button>
            </div>
        </nav>
    )
}

export default Navbar