import React from 'react'
import Footer from '../../components/Footer';
import Banner from '../../components/globals/Banner';
import PrimaryButton from './../../components/globals/PrimaryButton';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { media } from './../../utils/styles';
import { useEffect } from 'react';
import ImageContainer from './ImageContainer';
import Preloader from './../../components/globals/Preloader';
import { getSingleProductSuccess, setProductLoading, setProductId, getProductById } from './../../redux/products/products_action';
import { connect } from 'react-redux';

const SingleProducts = ({ productId, singleProduct, allProductsLoading, getSingleProductSuccess, setProductId, getProductById }) => {
    const { id } = useParams();
    const { name, price, images, company, description,stock } = singleProduct;

    useEffect(() => {
        setProductId(id)
        getProductById(productId)
    }, [id]);

    if (allProductsLoading) {
        return <Preloader />
    }
    return (<>
        <Banner title='product / name product' />
        <Wrapper>
            <Link to='/products'>
                <PrimaryButton title='back to products' />
            </Link>
            <div className="main-container">
                <ImageContainer images={images} allProductsLoading={allProductsLoading} />
                <section className='info-container'>
                    <h2 >
                        {name}
                    </h2>
                    <h5 className='price'>$ {price}</h5>
                    <p className='description'>
                        {description}
                    </p>
                    <div className="info">
                        <h5>avaible:</h5>
                        <p>{stock}</p>
                    </div>
                    <div className="info">
                        <h5>brand:</h5>
                        <p>{company}</p>
                    </div>
                    <hr />
                    <article >
                        <div className="colors">
                            <span>colors: </span>
                            <button> </button>
                        </div>
                        <div className="btn-container">
                            <button className='plus-minus-btn'>
                                <FaMinus />
                            </button>
                            <span>1</span>
                            <button className='plus-minus-btn'>
                                <FaPlus />
                            </button>
                        </div>
                        <PrimaryButton title='add to cart' />
                    </article>
                </section>
            </div>
        </Wrapper>
        <Footer />

    </>

    )
}
const mapStateToProps = (state) => ({
    productId: state.productsData.productId,
    singleProduct: state.productsData.singleProduct,
    allProductsLoading: state.productsData.allProductsLoading

})

const Wrapper = styled.main`
    width:90%;
    margin: 0 auto 40px;
    
    .info-container{
        h2 {
            text-transform: capitalize;
            letter-spacing:4px;
            font-weight:500;
            color:${props => props.theme.secondPrimaryColor}
        }
        .price {
                margin-top:10px;
                font-weight:500;
                letter-spacing:2px;
                width:150px;
            }
        
        .description{
            margin-top:20px;
            letter-spacing:1px;

        }
        .info {
            text-transform:capitalize;
            margin: 20px 0;
            display:flex;
            align-items:center;
            justify-content:flex-start;
            font-size:1.1rem;
            h5 {
                font-weight:500;
                letter-spacing:2px;
                width:150px;
            }
            
            p{ margin: 0};
            letter-spacing:1px;
        }
        .colors {
            display:flex;
            align-items:center;
            margin-top:20px;
            span {
                font-size:1.1rem;
                font-weight:500;
                text-transform:capitalize;
                width: 150px;
                display:inline-block;
            }
            button {
                height:25px;
                width:25px;
                border-radius:50%;
                background: ${props => props.theme.secondPrimaryColor};
                border: transparent;
            }
        }
        .btn-container{
            margin:20px 0;
            display:flex;
            align-items:center;
            .plus-minus-btn {
                margin: 0 10px;
                font-size:1rem;
                border: none;
                background:none;
                padding:10px;
            }
            span {
                font-size:2rem;
                font-weight:600;
                padding-bottom:9px;
                margin:0 10px
            }
        }
        
    }
    .main-container {
            display:grid;
            grid-template-columns: 1fr;
            gap: 50px;
        }
    ${media.desktop`
        .main-container {
            display:grid;
            grid-template-columns: 1fr 1fr;
            align-items:center;
            gap: 50px;

        }
    `}
`

export default connect(mapStateToProps, { getSingleProductSuccess, setProductId, getProductById })(SingleProducts)
