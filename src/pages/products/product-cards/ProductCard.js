import React from 'react'
import productImg from './../../../assets/card-img.jpeg'
import styled from 'styled-components';

function ProductCard({product}) {
    const {name,price, image} = product
    return (
        <Wrapper>
            <div className="img-container">
                <img src={image} alt='single room' />
                <div className="price">{price} $</div>
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
    background: ${props=>props.theme.mainWhite};
    width:90%;
    margin: 20px auto;
    ${props=>props.theme.shadow.light};
    ${props=>props.theme.setTransition()};
    border-radius: 4px;
    .room-info {
        h4 {
            text-transform:capitalize;
            letter-spacing:2px;
        }
        padding:10px;
    }
    .img-container {
        border-radius: 4px;
        background: ${props=>props.theme.mainBlack};
        position:relative;
        img {
            border-radius: 4px 4px 0 0;
            width:100%;
            height:250px;
            object-fit:cover;
            ${props=>props.theme.setTransition()};
            display:block;
            &:hover {
            opacity:0.5;
            }
        }
        .price {
            color: ${props=>props.theme.mainWhite};
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            letter-spacing: 3px;
            font-size:1.25rem;
            ${props=>props.theme.setBorder({ width: '3px', style: 'solid', color: props.theme.mainWhite })};
            padding:10px;
            ${props=>props.theme.setTransition()};           
        }
        &:hover .price{
                opacity: 1;
                ${props=>props.theme.setTransition()};
            }
    }
    button{
        cursor:pointer;
        border-color:transparent;
        border-radius: 3px;
        color: ${props=>props.theme.secondPrimaryColor};
        letter-spacing: 2px;
        background: ${props=>props.theme.lightBrown};
        font-size: 1rem;
        padding:5px 10px;
        text-transform:capitalize;
    }
    &:hover{
        ${props=>props.theme.shadow.dark};
        ${props=>props.theme.setTransition()};
    }


`

export default ProductCard
