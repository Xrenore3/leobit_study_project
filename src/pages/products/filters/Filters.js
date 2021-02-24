import React from 'react'
import styled from 'styled-components';

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
        background: ${props=>props.theme.mainGrey};
        letter-spacing: 1px;
        border-radius:3px;
    }
    ul {
        margin-top:5px;
    }
    li {
        list-style-type:none;
        margin-left:5px;
        ${props=>props.theme.setTransition()};
        &:hover{
            padding-left:10px;
            ${props=>props.theme.setTransition()};
        }

    }
    .form-company {
        margin-top:10px;
        padding:5px;
        border-color:transparent;
        background: ${props=>props.theme.mainGrey};
        letter-spacing: 1px;
        border-radius:3px;
    }
    button {
        cursor:pointer;
        border-color:transparent;
        border-radius: 3px;
        color: ${props=>props.theme.mainWhite};
        letter-spacing: 2px;
        background: ${props=>props.theme.primaryColor};
        font-size: 1rem;
        padding:5px 10px;
    }
    

`

export default Filters
