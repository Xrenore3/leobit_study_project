import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

const ErrorPage = () => {
  return (<>
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          <button>
            back home
          </button>
        </Link>
      </section>
    </Wrapper>
    <Footer />
  </>

  )
}

const Wrapper = styled.main`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
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
            ${props => props.theme.setBorder({ width: '2px', style: 'solid', color: props.theme.primaryColor })};
            }   
  }          
`

export default ErrorPage
