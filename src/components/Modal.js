import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import image from '../images/photo.jpeg'
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    // position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    width: 60vw;
    max-width: 700px;
    height: 450px;
    box-shadow: 0 5px 16px rgba (0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    z-index: 10;
    border-radius: 8px;
    overflow: hidden;
    position: fixed;
`;

const ModalImage = styled.img`
width: 100%;
height: 50%;
object-fit: cover;
object-position: 100% 58%;
background: #000;
`;

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
`;

const ModalCloseButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
`;

export default function Modal(props, { displayModal, setDisplayModal }) {
    const modalRef = useRef();

    const handleXClick = () => {
        props.handleXClick();
    };

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            props.handleXClick();
        }
    };

    return (
        <Background ref={modalRef} onClick={closeModal}>
                <ModalWrapper>
                    <ModalImage src={image} alt="photo"/>
                    <ModalContent>
                        <h1>Title</h1>
                        <p>Bla bla bla</p>
                        <button>Join now</button>
                    </ModalContent>
                    <ModalCloseButton aria-label='close modal' onClick={handleXClick} />
                </ModalWrapper>
        </Background>
    )
};
