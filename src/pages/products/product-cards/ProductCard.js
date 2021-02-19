import React from 'react'
import productImg from './../../../assets/card-img.jpeg'
import  styled  from 'styled-components';
import { setColor, setBorder, setShadow } from './../../../utils/styles';

function ProductCard() {
    return (
        <Wrapper>
            <div className="img-container">
                <img src={productImg} alt='single room' />
                <div className="price">$999</div>
            </div>
            <div className="room-info">
                <h4>product name</h4>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Harum deleniti repellat unde placeat quas, ut
                    itaque. Temporibus obcaecati commodi necessitatibus.
                </p>
                <button  >view</button>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.article`
    background: ${setColor.mainWhite};
    margin: 30px auto;
    max-width: 400px;
    ${setShadow.light};
    .room-info {
        h4{
            text-transform:capitalize;
        }
        padding:10px;
    }

    img{
        width:100%;
    }
    button{
        cursor:pointer;
        border-color:transparent;
        border-radius: 3px;
        color: ${setColor.secondPrimaryColor};
        letter-spacing: 2px;
        background: ${setColor.lightBrown};
        font-size: 1rem;
        padding:5px 10px;

    }


`

export default ProductCard
