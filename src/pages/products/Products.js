import React from 'react'
import Banner from './../../components/globals/Banner';
import Filters from './filters/Filters';
import ProductCards from './product-cards/ProductCardsContainer';
import Footer from './../../components/Footer';

const Products = () => {
    return (
        <>
            <Banner title='products'/>
            <Filters/>
            <ProductCards/>
            <Footer/>
        </>
    )
}

export default Products
