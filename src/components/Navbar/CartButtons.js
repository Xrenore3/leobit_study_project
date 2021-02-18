import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const CartButtons = () => {
    return (
        <div className='cart-btn-wrapper'>
            <Link to='/cart' className='cart-btn'>
                Cart
        <span className='cart-container'>
                    <FaShoppingCart />
                    <span className='cart-value'>0</span>
                </span>
            </Link>

            <button
                type='button'
                className='auth-btn'
            >
                Logout <FaUserMinus />
            </button>
        </div>
    )
}


export default CartButtons
