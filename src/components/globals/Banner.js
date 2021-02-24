import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Banner = ({ title }) => {
    return (
        <Wrapper>
            <h2>
                <Link to='/'>home  </Link> 
                <span>/ {title}</span>
            </h2>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background: ${props=>props.theme.lightBrown};
    padding:40px 100px;
    margin: 25px 0 50px;
    width: 100%;
    h2 {
        text-transform: capitalize;
        span{
            color: ${props=>props.theme.mainBlack}
        }
    }
    a {
        color: ${props=>props.theme.secondPrimaryColor};
        text-decoration:none;
        ${props=>props.theme.setTransition()};
        &:hover{
            color: ${props=>props.theme.mainBlack};
            ${props=>props.theme.setTransition()};
        }
    }   

`

export default Banner
