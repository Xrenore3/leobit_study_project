import { css } from "styled-components"


export const setColor = {
    primaryColor: '#af9a7d',
    secondPrimaryColor: '#735c3c',
    lightBrown: '#e6dbcc',
    mainWhite: '#fff',
    mainBlack: '#222',
    mainGrey: '#ececec',
    lightGrey: '#f7f7f7'
}

export const setShadow = {
    light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)',
    dark: 'box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.75)',
    darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)'
}

export const setBorder = ({ width = '2px', style = 'solid', color = 'black' } = {}) => {
    return `border: ${width} ${style} ${color};`
}

export const setTransition = ({ property = 'all', time = '0.3s', timing = 'ease-in-out' } = {}) => {
    return `transition: ${property} ${time} ${timing};`
}

const sizes = {
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width:${sizes[label]}px){
            ${css(...args)}
        }
    `;
    return acc
}, {})