import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import aboutImg from './../../assets/about-img.jpeg'
import { media } from './../../utils/styles';



const Hero = () => {
    return (
        <Wrapper>
            <div className='header-section'>
                <article className='header-about'>
                    <h1>
                        Design Your
                        Comfort Zone
                    </h1>
                    <div className="under-line"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium deserunt ad blanditiis molestiae. Deserunt iure
                        ad laudantium eligendi fugit tenetur similique temporibus
                        error amet aliquam ipsam nisi perferendis, nulla repellat!
                    </p>
                    <Link to='/products'>
                        <button >shop now</button>
                    </Link>
                </article>
                <article className='about-img'>
                    <img src={aboutImg} alt="table" />
                </article>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width:90%;
    margin: 20px auto;
    .header-section{
        width:80%;
        margin: 80px auto;
        display: grid;
        align-items:center;
    }
    .about-img {
        display:none;
        img {
        display:block;
        width:80%;
        margin: 0 auto;
        border-radius: 5px;
        }
    }
  

    .header-about{
        h1 {
            letter-spacing: 3px;
            font-size: 2.5rem;
            margin-bottom:0;
        }
        p {
         color:${props => props.theme.secondPrimaryColor};
         letter-spacing:1px;
        }
        .under-line {
            height:4px;
            background: ${props => props.theme.primaryColor};
            width:100px;
            margin: 10px 0 20px;
        }
        button {
            text-transform: uppercase;
            cursor:pointer;
            border-color:transparent;
            border-radius: 3px;
            color: ${props => props.theme.mainWhite};
            letter-spacing: 2px;
            background: ${props => props.theme.primaryColor};
            font-size: 1rem;
            padding:10px 15px;
            ${props => props.theme.setTransition()};
            &:hover{
            background: ${props => props.theme.mainWhite};
            color: ${props => props.theme.primaryColor};
            ${props => props.theme.setTransition()};
            ${props => props.theme.setBorder({ width: '2px', style: 'solid', color: `${props.theme.primaryColor}` })};
            }   
        }
    }
    ${media.desktop`
        .about-img {
            display:block;
        }
        .header-section{
            grid-template-columns: 1fr 1fr;
        }
    `}

`
export default Hero