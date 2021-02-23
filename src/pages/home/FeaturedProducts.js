import React from 'react'
import styled from 'styled-components';
import { setColor, setTransition, setBorder } from '../../utils/styles';
import Product from './Product';

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
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 50px;
    background: ${setColor.mainGrey}; 
    .products-container {
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    }
     
    .under-line {
        height:4px;
        background: ${setColor.primaryColor};
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

`
export default FeaturedProducts