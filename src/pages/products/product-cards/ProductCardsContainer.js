import React from 'react'
import Product from './ProductCard';
import styled from 'styled-components';
import { useProductsContext } from '../../../context/products_contex';
import Preloader from '../../../components/globals/Preloader';

const ProductCards = () => {
    const { allProducts, allProductsLoading } = useProductsContext();
    const products = allProducts.map(product => <Product key={product.id} product={product} />

    )
    return (
        <Wrapper>
            {allProductsLoading? <Preloader/>: products}
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
