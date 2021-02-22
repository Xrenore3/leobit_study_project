import React from 'react';
import aboutImg from './../../assets/about-img.jpeg'
import styled from 'styled-components';
import { setColor } from './../../utils/styles';
import Banner from './../../components/globals/Banner';
import Footer from './../../components/Footer';


const About = () => {
    return (<>
        <Banner title='about' />
        <Wrapper>
            <img src={aboutImg} alt="table" />
            <div className="title">
                <h2>Our Story</h2>
                <div className="under-line"></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam atque enim, debitis error hic assumenda exercitation
            em molestias pariatur doloribus, saepe dolores sint corrupti
                 voluptatem ratione delectus! Explicabo facere architecto repellat!</p>
        </Wrapper>
        <Footer/>
    </>

    )
}
const Wrapper = styled.section`
    margin: 30px auto;
    width:90%;
    img {
        width: 100%;
        height: 500px;
        display: block;
        object-fit:cover;
        border-radius: 5px;
    }
    .title {
        margin-top:50px;
        h2 {
            margin-bottom:10px;
        }
        .under-line{
            height:4px;
            background: ${setColor.primaryColor};
            width:100px;
        }
    }
    p {
        margin-top:40px;
    }
`
export default About
