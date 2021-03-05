import React from 'react'
import Footer from '../../components/Footer'
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import Subscribe from './Subscribe';
import Preloader from '../../components/globals/Preloader';

const Home = ({ allProducts, allProductsLoading }) => {
    return (<>
        <Hero />
        {allProductsLoading ? <Preloader /> : <FeaturedProducts allProducts={allProducts} />}
        <Subscribe />
        <Footer />
    </>
    )
}

export default Home