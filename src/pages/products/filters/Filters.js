import React from 'react'
import styled from 'styled-components';
import { setColor } from './../../../utils/styles';

const Filters = () => {
    return (
        <Wrapper>
            <form >
                <div className="form-general">
                    <input type="text" placeholder='Search' className='search-input' />
                </div>
                <div className="form-general">
                    <h5>category</h5>
                    <ul>
                        <li>some</li>
                        <li>some</li>
                        <li>some</li>
                        <li>some</li>
                        <li>some</li>
                    </ul>
                </div>
                <div className="form-general">
                    <h5>company</h5>
                    <select name="company" className='form-company'>
                        <option value="some company">some company</option>
                        <option value="some company">some company</option>
                        <option value="some company">some company</option>
                        <option value="some company">some company</option>
                        <option value="some company">some company</option>
                    </select>
                </div>
            </form>
            <button type='button'>clear filters</button>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    h5{
        margin:0;
        text-transform: capitalize;
    }
    margin-left:20px;
    .form-general {
        margin:20px 0 20px;
    }
    .search-input {
        padding:10px;
        border-color:transparent;
        background: ${setColor.mainGrey};
        letter-spacing: 1px;
        border-radius:3px;
    }
    ul {
        margin-top:5px;
    }
    li {
        list-style-type:none;
        margin-left:5px;
        transition: 0.2s all ease-in-out;
        &:hover{
            padding-left:10px;
            transition: 0.2s all ease-in-out;
        }

    }
    .form-company {
        margin-top:10px;
        padding:5px;
        border-color:transparent;
        background: ${setColor.mainGrey};
        letter-spacing: 1px;
        border-radius:3px;
    }
    button {
        cursor:pointer;
        border-color:transparent;
        border-radius: 3px;
        color: ${setColor.mainWhite};
        letter-spacing: 2px;
        background: ${setColor.primaryColor};
        font-size: 1rem;
        padding:5px 10px;
    }
    

`

export default Filters
