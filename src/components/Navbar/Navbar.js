import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiBowenKnot } from "react-icons/gi";
import CartButtons from './CartButtons';
import { setColor } from './../../assets/styles';


const Navbar = () => {
    return (
        <Wrapper>
            <div className='logo'>
                <GiBowenKnot className='logoImg' />
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
            <CartButtons />
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    .logo {
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .logoImg {
        width:4rem;
        height: 4rem;
        margin: 20px 20px 10px ;
    }
    .logoName {
        color: ${setColor.primaryColor};
        font-size: 2rem;
        text-transform: capitalize;
        letter-spacing: 3px;
        font-weight: 500;
        margin: 20px 20px 10px ;

    }
    li a{
        display: block;
        text-decoration:none;
        color: ${setColor.mainBlack};
        font-size:1.1rem;
        text-transform: capitalize;
        font-weight: 500;
        letter-spacing: 2px; 
        transition: all 0.3s linear;
        &:hover{
        background: ${setColor.mainGrey};
        padding-left:20px;
        transition: all 0.3s linear;
        };     
        padding:10px;  
    }
    li {
        list-style-type:none;
        margin: 10px;
      
    

    }
    
`
export default Navbar
