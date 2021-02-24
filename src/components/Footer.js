import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> name in process</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props=>props.theme.mainBlack};
  text-align: center;
  span {
    color: ${props=>props.theme.primaryColor};
  }
  h5 {
    color: ${props=>props.theme.mainWhite};
    margin: 0.1rem;
    font-weight: 400;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
