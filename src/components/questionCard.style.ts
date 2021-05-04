import styled from 'styled-components'

export const Wrapper = styled.div`
max-width: 1100px;
background: #ebfeff;
border-radius: 10px;
`

type ButtonWrapper = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapper>`
transition: all 0.4s ease;
:hover {
    opacity: 0.7;
}
button {
    cursor: pointer;
    user-select: none;
    font-size: 0.7rem;
    width: 100%;
    height: 40px;
}
`