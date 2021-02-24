import React from 'react'
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
         color:${props => props.theme.secondPrimaryColor};
         letter-spacing:1px;
    }
    input {
        padding:10px;
        border-color:transparent;
        background: ${props => props.theme.lightBrown};
        letter-spacing: 1px;
        border-radius:3px 0 0 3px;
        width:70%;
        ${props => props.theme.setBorder({ width: '2px', style: 'solid', color: props.theme.primaryColor })};

    }
    button{
        border-radius:0 3px 3px 0;
        width:30%;
        padding:10px;
        border-color:transparent;
        background: ${props => props.theme.primaryColor};
        color:${props => props.theme.lightBrown};
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight:600;
        ${setTransition};
        &:hover{
            background: ${props => props.theme.mainWhite};
            ${props => props.theme.setTransition};
            color:${props => props.theme.primaryColor};
            ${props => props.theme.setBorder({ width: '2px', style: 'solid', color: props.theme.primaryColor })};
        }
    }
    .subscribe-form input::placeholder{
        color:${props => props.theme.secondPrimaryColor};
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