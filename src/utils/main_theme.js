import { css } from "styled-components"

export const mainTheme = {
    primaryColor: '#af9a7d',
    secondPrimaryColor: '#735c3c',
    lightBrown: '#e6dbcc',
    mainWhite: '#fff',
    mainBlack: '#222',
    mainGrey: '#ececec',
    lightGrey: '#f7f7f7',
    shadow: {
        light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)',
        dark: 'box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.75)',
        darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)'
    },
    setTransition: ({ property = 'all', time = '0.3s', timing = 'ease-in-out' } = {}) => {
        return `transition: ${property} ${time} ${timing};`
    },
    setBorder: function ({ width = '2px', style = 'solid', color = 'black' } = {}) {
        return `border: ${width} ${style} ${color};`
    },
    // media: function () {
    //     const sizes = {
    //         large: 1200,
    //         desktop: 992,
    //         tablet: 768,
    //         phone: 576
    //     }
    //     const mediaQueries = Object.keys(sizes).reduce(function (acc, label) {
    //         acc[label] = function (...args) {
    //             css`
    //         @media (min-width:${sizes[label]}px){
    //             ${css(...args)}
    //         }
    //     `}
    //         return acc
    //     }, {})
    //     return mediaQueries
    // }
}
