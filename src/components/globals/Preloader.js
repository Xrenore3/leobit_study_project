import React from 'react'
import preloader from './../../assets/preloader-svg.svg'
import styled from 'styled-components';
const Preloader = () => {
    return (
        <Wrapper>
            <img src={preloader} alt="preloader" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding:100px;
    display:flex;
    justify-content:center;
    align-items:center
`
export default Preloader
