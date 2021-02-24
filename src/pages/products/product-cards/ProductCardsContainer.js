import React from 'react'
import Product from './ProductCard';
import  styled  from 'styled-components';

const ProductCards= () => {
    return (
        <Wrapper>
            <Product/>
            <Product/>
            <Product/>           
        </Wrapper>
    )
}
const Wrapper = styled.section`
    margin: 0 20px 20px;
    display:grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
`
export default ProductCards
