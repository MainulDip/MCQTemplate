import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/bgimage.jpg'
import BGsketch from './images/bgsketch.jpg'

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

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    color: #fff;
}
.score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
}
h1 {
    background-image: url(${BGsketch});
    background-size: 100%;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    line-height: 77px;
    text-align: center;
    margin: 20px;
    color: transparent;
}
`