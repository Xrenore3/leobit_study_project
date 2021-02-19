import React from 'react'
import Banner from './../../components/globals/Banner';
import Filters from './filters/Filters';
import ProductCards from './product-cards/ProductCardsContainer';

const Products = () => {
    return (
        <>
            <Banner title='products'/>
            <Filters/>
            <ProductCards/>
        </>
    )
}

export default Products
