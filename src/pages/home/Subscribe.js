import React from 'react'
import Footer from '../../components/Footer'
import styled from 'styled-components';
import { setColor, setTransition, setBorder } from '../../utils/styles';
import { media } from './../../utils/styles';

const Subscribe = () => {
    return (
        <Wrapper>
            <div>
                <h3>
                    Join our newsletter and get 20% off
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium deserunt ad blanditiis molestiae. Deserunt iure
                </p>
            </div>
            <form className='subscribe-form'>
                <input type="email" name='email subscribe' placeholder='Enter Email' />
                <button type='submit'>subscribe</button>
            </form>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    width:90%;
    margin: 20px auto;
    h3 {
         letter-spacing: 3px;
         margin:40px 0 20px;
    }
    p {
         color:${setColor.secondPrimaryColor};
         letter-spacing:1px;
    }
    input {
        padding:10px;
        border-color:transparent;
        background: ${setColor.lightBrown};
        letter-spacing: 1px;
        border-radius:3px 0 0 3px;
        width:70%;
        ${setBorder({ width: '2px', style: 'solid', color: `${setColor.primaryColor}` })};

    }
    button{
        border-radius:0 3px 3px 0;
        width:30%;
        padding:10px;
        border-color:transparent;
        background: ${setColor.primaryColor};
        color:${setColor.lightBrown};
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight:600;
        ${setTransition};
        &:hover{
            background: ${setColor.mainWhite};
            ${setTransition};
            color:${setColor.primaryColor};
            ${setBorder({ width: '2px', style: 'solid', color: `${setColor.primaryColor}` })};
        }
    }
    .subscribe-form input::placeholder{
        color:${setColor.secondPrimaryColor};
        font-size: 1rem;
    } 
    ${media.tablet`
        width:70%;
    `}
    ${media.large`
        width:60%;
    `}
`
export default Subscribe