import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <NavLink to='/'>
                <img className='nav-logo' src={logo} alt="logotype flexiclean blue gray grey logo" />
            </NavLink>

            <div className="nav-links">
                <div className='nav-link dropdown'>
                    Produkter
                    <AiOutlineDown />
                    <div className="dropdown-content">
                        <NavLink to='/produkter' className='nav-link line drop'>Dagvatten- och granulatfilter</NavLink>
                        <NavLink to='/projekt' className='nav-link line drop'>Stora projekt</NavLink>
                        <NavLink to='/montage' className='nav-link drop'>Montage</NavLink>
                    </div>
                </div>
                <NavLink to='/dokumentcenter' className='nav-link'>Documentcenter</NavLink>
                <NavLink to='/kontakta-oss' className='nav-link'>Kontakta oss</NavLink>
                <button className='btn btn-gray'>Beställ</button>
            </div>

            {/* ------Menu------- */}
            {!menuOpen ? (
                <div className="nav-link menu" onClick={() => setMenuOpen(true)}>
                    <strong>Meny</strong>
                </div>
            ) : (
                <div className="menu-content">
                    <div className="btn-close" onClick={() => setMenuOpen(false)}> X</div>
                    <div className='nav-link no'>Produkter</div>
                    <div className='menu-df'>
                        <Link to='/produkter' onClick={() => setMenuOpen(false)} className='nav-link'>Dagvatten- och <br /> granulatfilter</Link>
                        <Link to='/projekt' onClick={() => setMenuOpen(false)} className='nav-link'>Stora projekt</Link>
                        <Link to='/montage' onClick={() => setMenuOpen(false)} className='nav-link'>Montage</Link>
                    </div>
                    <Link to='/dokumentcenter' onClick={() => setMenuOpen(false)} className='nav-link'>Documentcenter</Link>
                    <Link to='/kontakta-oss' onClick={() => setMenuOpen(false)} className='nav-link'>Kontakta oss</Link>
                    <button className='btn btn-gray'>Beställ</button>
                </div>
            )}
        </nav>
    )
}

export default Navbar