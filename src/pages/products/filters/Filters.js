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
    margin-left:20px;
    .search-input {
        padding:10px;
        border-color:transparent;
        background: ${setColor.mainGrey};
        letter-spacing: 1px;
        border-radius:3px;
    }
    h5{
        margin:0;
    }

`

export default Filters
