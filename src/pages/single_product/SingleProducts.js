import React from 'react'
import Footer from '../../components/Footer';
import Banner from '../../components/globals/Banner';
import image from './../../assets/single_product.jpg'
import PrimaryButton from './../../components/globals/PrimaryButton';
import styled from 'styled-components';
const SingleProducts = () => {
    return (<>
        <Banner title='product / name product' />
        <Wrapper>
            <div className="btn-prm-center">
                <PrimaryButton title='back to products' />
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
                <div className="">
                    <h5>Avaible:</h5>
                    <p>Out of Stock</p>
                </div>
                <div className="">
                    <h5>Brand:</h5>
                    <p>Ikea</p>
                </div>
                <hr />
                <article >
                    <div className="colors">
                        <span>color: </span>
                        <button>color</button>
                    </div>
                    <div className="btn-container">
                        <button>+</button>
                        <span>1</span>
                        <button>-</button>
                        <PrimaryButton title='add to cart' />
                    </div>
                </article>
            </section>
        </Wrapper>
        <Footer />

    </>

    )
}
const Wrapper = styled.main`
    width:90%;
    margin: 0 auto;
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
            color:${props=>props.theme.secondPrimaryColor}
        }
        h5 {
            font-weight:500;
            letter-spacing:2px;
            margin-top:10px;
        }
        .description{
            margin-top:20px;
            letter-spacing:1px;
        }
    }

    

`

export default SingleProducts
