import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiBowenKnot } from "react-icons/gi";
import CartButtons from './CartButtons';
import {  media } from './../../utils/styles';


const Navbar = () => {
    return (
        <Wrapper>
            <div className='logo'>
                <Link to='/'>
                    <GiBowenKnot className='logoImg' />
                </Link>
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
        color: ${props=>props.theme.primaryColor};
        font-size: 2rem;
        text-transform: capitalize;
        letter-spacing: 3px;
        font-weight: 500;
        margin: 20px 20px 10px ;

    }
    li a{
        display: block;
        color: ${props=>props.theme.mainBlack};
        font-size:1.1rem;
        text-transform: capitalize;
        font-weight: 500;
        letter-spacing: 2px; 
        ${props=>props.theme.setTransition()};
        &:hover{
        background: ${props=>props.theme.mainGrey};
        padding-left:20px;
        ${props=>props.theme.setTransition()};
        };     
        padding:10px;  
    }
    li {
        list-style-type:none;
        margin: 10px;  
    }
    a{
        text-decoration:none;
        color: ${props=>props.theme.secondPrimaryColor};
    }
    ${media.tablet`   
        display:grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        .logoImg {
            display: none;
        }
        .logoName {
            font-size: 1.5rem;
        }
        .logo {
            display:flex;
            justify-content: start; 
        }
        li a,li { 
            display:inline-block;
        }
        ul {
            margin-top: 20px;
            text-align: center;
        }
        li a { 
            border-radius: 4px;
            &:hover{
                background: ${props=>props.theme.mainGrey};
                padding-left:10px;
                ${props=>props.theme.setTransition()};
        };
    `}
    ${media.desktop`   
        grid-template-columns: 1fr 1.5fr 1fr;
        .logoImg {
            display: block;
        }
        .logoName {
            font-size: 1.8rem;
        }
        li a{
            text-transform:uppercase;
        }


    `}
    
`
export default Navbar
