import React from 'react'
import Banner from './../../components/globals/Banner';
import Filters from './filters/Filters';
import ProductCards from './product-cards/ProductCardsContainer';
import Footer from './../../components/Footer';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Products = ({ allProducts, allProductsLoading, categories, companies }) => {
    return (
        <>
            <Banner title='products'  />
            <Wrapper>
                <Filters categories={categories} companies={companies} />
                <ProductCards allProducts={allProducts} allProductsLoading={allProductsLoading} />
            </Wrapper>
            <Footer />
        </>
    )
}

const Wrapper = styled.section`
    display:grid;
    grid-template-columns: 1.5fr 8.5fr;
`
const mapStateToProps = (state) => ({
    categories: state.filtersData.categories,
    companies: state.filtersData.companies
})

export default connect(mapStateToProps, {})(Products)
