import React from 'react'
import Product from './ProductCard';
import styled from 'styled-components';
import Preloader from '../../../components/globals/Preloader';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import productsFetchData from './../../../assets/products_mock_data'
import { getAllProductsSuccess } from './../../../redux/reducers/products_reducer';

const ProductCards = ({ allProducts, allProductsLoading, getAllProductsSuccess }) => {

    const products = allProducts.map(product => <Product key={product.id} product={product} />
    )
    useEffect(() => { getAllProductsSuccess(productsFetchData) }, [])
    return (
        <Wrapper>
            {allProductsLoading ? <Preloader /> : products}
        </Wrapper>
    )
}
const Wrapper = styled.section`
    margin: 0 20px 20px;
    display:grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
`
const mapStateToProps = (state) => ({
    allProducts: state.productsData.allProducts,
    allProductsLoading: state.productsData.allProductsLoading



})

export default connect(mapStateToProps, { getAllProductsSuccess })(ProductCards)
