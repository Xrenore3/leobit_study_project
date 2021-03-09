import React from 'react'
import Banner from './../../components/globals/Banner';
import Filters from './filters/Filters';
import ProductCards from './product-cards/ProductCardsContainer';
import Footer from './../../components/Footer';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setFilterByCompany, setFilterByCategory } from './../../redux/products_filters/products_filters_actions';

const Products = ({
    allProducts,
    allProductsLoading,
    categories,
    companies,
    filteredCompany,
    filteredCategory,
    setFilterByCompany,
    setFilterByCategory }) => {
    return (
        <>
            <Banner title='products' />
            <Wrapper>
                <Filters
                    categories={categories}
                    companies={companies}
                    filteredCompany={filteredCompany}
                    filteredCategory={filteredCategory}
                    setFilterByCompany={setFilterByCompany}
                    setFilterByCategory={setFilterByCategory} />
                <ProductCards
                    allProducts={allProducts}
                    allProductsLoading={allProductsLoading} />
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
    companies: state.filtersData.companies,
    filteredCompany: state.filtersData.filteredCompany,
    filteredCategory: state.filtersData.filteredCategory


})

export default connect(mapStateToProps, { setFilterByCompany, setFilterByCategory })(Products)
