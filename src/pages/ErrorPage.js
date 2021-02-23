import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { setBorder, setColor, setTransition } from '../utils/styles'
import Footer from '../components/Footer'
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
            ${setBorder({ width: '2px', style: 'solid', color: `${setColor.primaryColor}` })};
            }   
  }          
`

export default ErrorPage
