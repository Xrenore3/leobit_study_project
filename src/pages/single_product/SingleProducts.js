import React from 'react'
import Footer from '../../components/Footer';
import Banner from '../../components/globals/Banner';
import image from './../../assets/single_product.jpg'
import PrimaryButton from './../../components/globals/PrimaryButton';
const SingleProducts = () => {
    return (
        <div>
            <PrimaryButton title='back to products' />
            <Banner title='product / name product' />
            <section>
                <img src={image} alt="main img" className='main-img' />
                <div>
                    <img src={image} alt="main img" className='main-img' />
                    <img src={image} alt="main img" className='main-img' />
                    <img src={image} alt="main img" className='main-img' />
                    <img src={image} alt="main img" className='main-img' />
                    <img src={image} alt="main img" className='main-img' />
                </div>
            </section>
            <section>
                <h3>
                    some name
                </h3>
                <h5>price here</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus corrupti ipsa,
                    consequatur minima atque odio repellendus autem.
                    Harum atque dolorum necessitatibus corrupti excepturi optio dolorem nulla quis non sunt?
                </p>
                <div className="info">
                    <h5>Avaible:</h5>
                    <p>Out of Stock</p>
                </div>
                <div className="info">
                    <h5>Brand:</h5>
                    <p>Ikea</p>
                </div>
            </section>
            <hr />
            <section>
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
            </section>
            <Footer />
        </div>
    )
}

export default SingleProducts
