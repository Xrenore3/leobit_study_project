import React from 'react'
import productImg from './../../../assets/card-img.jpeg'
import styled from 'styled-components';
import { setColor, setBorder, setShadow, setTransition } from './../../../utils/styles';

function ProductCard({product}) {
    const {name} = product
    return (
        <Wrapper>
            <div className="img-container">
                <img src={productImg} alt='single room' />
                <div className="price">$999 <span></span> </div>
            </div>
            <div className="room-info">
                <h4> {name}</h4>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Harum deleniti repellat unde placeat quas, ut
                    itaque. Temporibus obcaecati commodi necessitatibus.
                </p>
                <button  >view</button>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.article`
    background: ${setColor.mainWhite};
    width:90%;
    margin: 20px auto;
    ${setShadow.light};
    ${setTransition};
    .room-info {
        h4 {
            text-transform:capitalize;
            letter-spacing:2px;
        }
        padding:10px;
    }
    .img-container {
        background: ${setColor.mainBlack};
        position:relative;
        img {
            width:100%;
            ${setTransition};
            display:block;
            &:hover {
            opacity:0.5;
            }
        }
        .price {
            color: ${setColor.mainWhite};
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            letter-spacing: 3px;
            font-size:1.25rem;
            ${setBorder({ width: '3px', style: 'solid', color: 'white' })};
            padding:10px;
            ${setTransition};           
        }
        &:hover .price{
                opacity: 1;
                ${setTransition};
            }
    }
    button{
        cursor:pointer;
        border-color:transparent;
        border-radius: 3px;
        color: ${setColor.secondPrimaryColor};
        letter-spacing: 2px;
        background: ${setColor.lightBrown};
        font-size: 1rem;
        padding:5px 10px;
        text-transform:capitalize;
    }
    &:hover{
        ${setShadow.dark};
        ${setTransition};
    }


`

export default ProductCard
