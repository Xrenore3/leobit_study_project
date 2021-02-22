import styled from "styled-components";

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