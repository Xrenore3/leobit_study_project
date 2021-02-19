import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { setColor } from './../../utils/styles';


const CartButtons = () => {
    return (
        <Wrapper>
            <div className='cart-btn-center'>
                <Link to='/cart' className='cart-btn-global'>
                    <span >Cart</span>
                    <span className='cart-img-container'>
                        <FaShoppingCart />
                        <span className='cart-value'>0</span>
                    </span>
                </Link>

                <button
                    type='button'
                    className='cart-btn-global'
                >
                    Logout <FaUserMinus />
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
        color: ${setColor.primaryColor};
    
    }
    .cart-value {
        position:relative;
        top:-10px;
        left: -10px;
        display: inline-flex;
        align-items: center;
        justify-content:center;
        background: ${setColor.mainBlack};
        border-radius:50%;
        color: ${setColor.mainWhite};
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
        color: ${setColor.mainBlack};
        border: none;
        background: ${setColor.mainWhite};
    }
    svg {
        margin-left:20px;
    }

`
export default CartButtons
