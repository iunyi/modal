import React from 'react'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba (0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns; 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 8px;
`

const ModalImage = styled.img`
width: 100%;
height: 100%;
border-radius: 10px 0 0 10px;
background: #000;
`

const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color#141414;

p {
    margin-button: 1rem;
}

button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
}
`
const ModalCloseButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    color: blue;
`

export default function Modal(props) {
    const handleXClick = () => {
        props.handleXClick()
    }
    return (
        <Background>
            <ModalWrapper>
                <ModalImage src={require('../images/photo.jpeg')} alt="photo"/>
                <ModalContent>
                    <h1>Title</h1>
                    <p>Bla bla bla</p>
                    <button>Join now</button>
                </ModalContent>
                <ModalCloseButton aria-label='close modal' onClick={handleXClick} />
            </ModalWrapper>
        </Background>
    )
}
