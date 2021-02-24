import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    return (
        <Wrapper>
            <article>
                <h1>
                    featured products
                    </h1>
                <div className="under-line"></div>
            </article>
            <div className="products-container">
                <Product/>
                <Product/>
                <Product/>
            </div>
            <Link to='/products'>
                <button>all products</button>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 50px;
    background: ${props=>props.theme.mainGrey}; 
    text-align:center;
    .products-container {
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    }
     
    .under-line {
        height:4px;
        background: ${props=>props.theme.primaryColor};
        width:100px;
        margin: 10px auto;
    }
    h1 {
        text-align: center;
         letter-spacing: 3px;
         font-size: 2rem;
         margin-bottom:0;
         text-transform:capitalize;
    }
    button {
            text-transform: uppercase;
            cursor:pointer;
            border-color:transparent;
            border-radius: 3px;
            color: ${props=>props.theme.mainWhite};
            letter-spacing: 2px;
            background: ${props=>props.theme.primaryColor};
            font-size: 1rem;
            padding:10px 15px;
            ${props=>props.theme.setTransition()};
            &:hover{
                background: ${props=>props.theme.mainWhite};
                color: ${props=>props.theme.primaryColor};
                ${props=>props.theme.setTransition()};
                ${props=>props.theme.setBorder({ width: '2px', style: 'solid', color: `${props.theme.primaryColor}` })};
            }   
        }

`
export default FeaturedProducts