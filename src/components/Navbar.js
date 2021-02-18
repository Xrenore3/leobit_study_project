import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { GiBowenKnot } from "react-icons/gi";


const Navbar = () => {
    return (
        <div>
            <div className='logo'>
                <GiBowenKnot />
                <span className="logoName">name in process</span>
            </div>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <Link to='/products'>products</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
