import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setColor } from './../../utils/styles';

const Banner = ({ title }) => {
    return (
        <Wrapper>
            <h2>
                <Link to='/'>home       </Link> 
                <span>/ {title}</span>
            </h2>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background: ${setColor.lightBrown};
    padding:40px 100px;
    margin: 1.5rem 0 3rem;
    width: 100%;
    h2 {
        text-transform: capitalize;
        span{
            color: ${setColor.mainBlack}
        }
    }
    a {
        color: ${setColor.secondPrimaryColor};
        text-decoration:none;
        transition: 0.3s all ease-in-out;      ;  
        &:hover{
            color: ${setColor.mainBlack};
            transition: 0.3s all ease-in-out;      ;  
        }
    }   

`

export default Banner
