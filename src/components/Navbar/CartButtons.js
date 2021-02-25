import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { media } from './../../utils/styles';


const CartButtons = () => {
    return (
        <Wrapper>
            <div className='cart-btn-center'>
                <Link to='/cart' className='cart-btn-global'>
                    <span className='cart-name' >Cart</span>
                    <span className='cart-img-container'>
                        <FaShoppingCart />
                        <span className='cart-value'>0</span>
                    </span>
                </Link>

                <button
                    type='button'
                    className='cart-btn-global'
                >
                    <span className='button-name'>Logout</span>
                    <FaUserMinus />
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .cart-btn-center{
       margin-top:20px;
       display:grid;
       align-items:center;
       grid-template-columns: 1fr 1fr
    }
    
    .cart-img-container {
        display:flex;
        align-items:center;
        color: ${props => props.theme.primaryColor};
    
    }
    .cart-value {
        position:relative;
        top:-10px;
        left: -10px;
        display: inline-flex;
        align-items: center;
        justify-content:center;
        background: ${props => props.theme.mainBlack};
        border-radius:50%;
        color: ${props => props.theme.mainWhite};
        font-size:1rem;
        width: 16px;
        height: 16px;
    }
    .cart-btn-global {
        display:flex;
        align-items:center;
        justify-content: center;
        text-decoration: none;
        font-size:1.5rem;
        letter-spacing:2px;
        color: ${props => props.theme.mainBlack};
        border: none;
        background: ${props => props.theme.mainWhite};
    }
    svg {
        margin-left:20px;
    }
    ${media.tablet`
        .cart-name, .button-name{
            display: none;

        }`
    }
    ${media.desktop`
        .cart-name, .button-name{
            display: block;

        }`
    }

`
export default CartButtons
