import React from 'react'
import Footer from '../../components/Footer'
import styled from 'styled-components';
import { setColor, setTransition, setBorder } from './../../utils/styles';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import Subscribe from './Subscribe';

const Home = () => {
    return (<>
        <Hero />
        <FeaturedProducts/>
        <Subscribe/>
        <Footer/>
    </>

    )
}

export default Home