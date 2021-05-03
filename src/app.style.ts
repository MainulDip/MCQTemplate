import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/bgimage.jpg'

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${BGImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
`