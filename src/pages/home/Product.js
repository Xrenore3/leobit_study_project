import React from 'react'
import productImg from './../../assets/card-img.jpeg'
import styled from 'styled-components';
import PrimaryButton from './../../components/globals/PrimaryButton';
import { Link } from 'react-router-dom';

function Product({ name, price, id }) {
    return (
        <Wrapper>
            <div className="img-container">
                <img src={productImg} alt='single room' />
                <div className="price">${price}  </div>
            </div>
            <div className="room-info">
                <h4>{name}</h4>
                <Link to={`products/${id}`}>
                    <PrimaryButton title='view' />
                </Link>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.article`
    background: ${props => props.theme.mainWhite};
    margin: 30px 5%;
    max-width: 90%;
    ${props => props.theme.shadow.light};
    ${props => props.theme.setTransition()};
    .room-info {
        display: flex;
        justify-content:space-between;
        align-items:center;
        h4 {
            text-transform:capitalize;
            letter-spacing: 2px;
            font-weight:400;
        }
        padding:10px 20px;
    }
    .img-container {
        background: ${props => props.theme.mainBlack};
        position:relative;
        img {
            width:100%;
            ${props => props.theme.setTransition};
            display:block;
            &:hover {
            opacity:0.5;
            }
        }
        .price {
            color: ${props => props.theme.mainWhite};
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            letter-spacing: 3px;
            font-size:1.25rem;
            ${props => props.theme.setBorder({ width: '3px', style: 'solid', color: props.theme.mainWhite })};
            padding:10px;
            ${props => props.theme.setTransition()};           
        }
        &:hover .price{
                opacity: 1;
                ${props => props.theme.setTransition()};
            }
    }
 
    &:hover{
        ${props => props.theme.shadow.dark};
        ${props => props.theme.setTransition()};
    }

`

export default Product
