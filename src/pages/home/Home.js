import React from 'react'
import Footer from '../../components/Footer'
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import Subscribe from './Subscribe';
import Preloader from '../../components/globals/Preloader';
import { useProductsContext } from '../../context/products_contex';

const Home = () => {
    const { allProductsLoading } = useProductsContext();

    return (<>
        <Hero />
        {allProductsLoading ? <Preloader /> : <FeaturedProducts />}
        <Subscribe />
        <Footer />
    </>

    )
}

export default Home