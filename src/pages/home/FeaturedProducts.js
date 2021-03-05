import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { Link } from 'react-router-dom';
import PrimaryButton from './../../components/globals/PrimaryButton';
import { connect } from 'react-redux';

const FeaturedProducts = ({ allProducts }) => {
    const threeProductsView = allProducts.filter((item, index) => index < 3);
    const products = threeProductsView.map(product => {
        console.log(product)
        const { name, price, id, image } = product
        return <Product name={name} price={price} key={id + name} id={id} image={image} />
    })
    return (
        <Wrapper>
            <article>
                <h1>
                    featured products
                    </h1>
                <div className="under-line"></div>
            </article>
            <div className="products-container">
                {products}
            </div>
            <Link to='/products'>
                <PrimaryButton title='all products' />
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 50px;
    background: ${props => props.theme.mainGrey}; 
    text-align:center;
    .products-container {
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    }
     
    .under-line {
        height:4px;
        background: ${props => props.theme.primaryColor};
        width:100px;
        margin: 10px auto;
    }
    h1 {
        text-align: center;
         letter-spacing: 3px;
         font-size: 2rem;
         margin-bottom:0;
         text-transform:capitalize;
    }
`


export default FeaturedProducts