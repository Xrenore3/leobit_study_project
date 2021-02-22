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

const Wrapper = styled.main`
.header-section{
    width:90%;
    margin: 20px auto;
}
.header-about{
     h1 {
         letter-spacing: 3px;
         font-size: 2.5rem;
         margin-bottom:0;
     }
     p {
         color:${setColor.secondPrimaryColor};
         letter-spacing:1px;
     }
     .under-line {
            height:4px;
            background: ${setColor.primaryColor};
            width:100px;
            margin: 10px 0 20px;
     }
     button {
        text-transform: uppercase;
        cursor:pointer;
        border-color:transparent;
        border-radius: 3px;
        color: ${setColor.mainWhite};
        letter-spacing: 2px;
        background: ${setColor.primaryColor};
        font-size: 1rem;
        padding:10px 15px;
        ${setTransition};
        &:hover{
            background: ${setColor.mainWhite};
            color: ${setColor.primaryColor};
            ${setTransition};
            ${setBorder({ width: '1px', style: 'solid', color: `${setColor.primaryColor}` })};
        }   
    }
}

`
export default Home