import React from 'react'
import Footer from '../../components/Footer';
import Banner from '../../components/globals/Banner';
import image from './../../assets/single_product.jpg'
import PrimaryButton from './../../components/globals/PrimaryButton';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleProducts = () => {
    return (<>
        <Banner title='product / name product' />
        <Wrapper>
            <div className="btn-prm-center">
                <Link to='/products'>
                    <PrimaryButton title='back to products' />
                </Link>
            </div>
            <section className='img-container'>
                <img src={image} alt="main img" className='main-img' />
                <div className='small-img-container'>
                    <img src={image} alt="main img" className='small-img' />
                    <img src={image} alt="main img" className='small-img' />
                    <img src={image} alt="main img" className='small-img' />
                    <img src={image} alt="main img" className='small-img' />
                    <img src={image} alt="main img" className='small-img' />
                </div>
            </section>
            <section className='info-container'>
                <h2 >
                    some name
                </h2>
                <h5 className='price'>$ 56878</h5>
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus corrupti ipsa,
                    consequatur minima atque odio repellendus autem.
                    Harum atque dolorum necessitatibus corrupti excepturi optio dolorem nulla quis non sunt?
                </p>
                <div className="info">
                    <h5>avaible:</h5>
                    <p>out of stock</p>
                </div>
                <div className="info">
                    <h5>brand:</h5>
                    <p>ikea</p>
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
        </Wrapper>
        <Footer />

    </>

    )
}
const Wrapper = styled.main`
    width:90%;
    margin: 0 auto 40px;
    img{
        object-fit:cover;
    }
    .img-container{
        margin-top:30px;
        .main-img {
        display:block;
        width: 100%;
        border-radius:4px;
        height:500px;
        }
        .small-img-container{
            margin-top:15px;
            .small-img{
                width:100%;
                border-radius:4px;
                height:100px
            }
            display:grid;
            grid-template-columns: repeat(5,1fr);
            gap:15px;
        }
    }
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

    

`

export default SingleProducts
