import React from 'react'
import Banner from './../../components/globals/Banner';
import Filters from './filters/Filters';
import ProductCards from './product-cards/ProductCardsContainer';
import Footer from './../../components/Footer';
import styled from 'styled-components';

const Products = ({ allProducts, allProductsLoading }) => {
    return (
        <>
            <Banner title='products' />
            <Wrapper>
                <Filters />
                <ProductCards allProducts={allProducts} allProductsLoading={allProductsLoading} />
            </Wrapper>
            <Footer />
        </>
    )
}

const Wrapper = styled.section`
    display:grid;
    grid-template-columns: 1.5fr 8.5fr;
`

export default Products
