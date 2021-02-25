import React from 'react'
import  styled  from 'styled-components';

const PrimaryButton = ({title}) => {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    )
}
const Wrapper = styled.button`
            text-transform: uppercase;
            cursor:pointer;
            border-color:transparent;
            border-radius: 3px;
            color: ${props => props.theme.mainWhite};
            letter-spacing: 2px;
            background: ${props => props.theme.primaryColor};
            font-size: 1rem;
            padding:10px 15px;
            ${props => props.theme.setTransition()};
            &:hover{
            background: ${props => props.theme.mainWhite};
            color: ${props => props.theme.primaryColor};
            ${props => props.theme.setTransition()};
            ${props => props.theme.setBorder({ width: '2px', style: 'solid', color: `${props.theme.primaryColor}` })};
            }   
`
export default PrimaryButton
