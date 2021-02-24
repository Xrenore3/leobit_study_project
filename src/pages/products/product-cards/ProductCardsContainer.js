import React from 'react'
import Product from './ProductCard';
import styled from 'styled-components';
import { useProductsContext } from '../../../context/products_contex';

const ProductCards = () => {
    const { allProducts } = useProductsContext();
    const products = allProducts.map(product => <Product key={product.id} product={product} />

    )
    return (
        <Wrapper>
            {products}
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
