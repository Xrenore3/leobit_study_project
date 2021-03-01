import React, { useState } from 'react'
import styled from 'styled-components';
import Preloader from '../../components/globals/Preloader';
import { useEffect } from 'react';


const ImageContainer = ({ images = [{ url: '123' }] }) => {
    const [largeImg, setLargeImg] = useState(images[0].url)

    // fix, don't work without useEffect
    useEffect(() => {
        setLargeImg(images[0].url)
    }, [images])
    return (

        <Wrapper >
            <img src={largeImg} alt="large img" className='large-img' />
            <div className='small-img-container'>
                {images.map((image, index) => {
                    return <img key={index}
                        src={image.url}
                        alt="large img"
                        className={image.url === largeImg ? 'small-img active' : 'small-img'}
                        onClick={() => setLargeImg(image.url)} />
                })}

            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
        img{
            object-fit:cover;
        }
        .active {
            ${props => props.theme.setBorder({ width: '2px', color: props.theme.mainBlack })}
        }
        margin-top:30px;
        .large-img {
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
    
`

export default ImageContainer
