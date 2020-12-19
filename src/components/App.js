import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Button from './Button';
import Modal from './Modal';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin:0;
  padding: 0;
  font-family: 'Roboto', sans-serif;

}
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function App() {
  const [displayModal, setDisplayModal] = useState(false);

  const openModal = () => {
    setDisplayModal(true)
  };
  
  const closeModal = () => {
    setDisplayModal(false)
  };

  const animation = useSpring({
    config: {
        duration: 350
    },
    opacity: displayModal ? 1 : 0,
    transform: displayModal? `translateY(0%)` : `translateY(-100%)`
  });

  return (
    <>
      <GlobalStyle />
      <Container>
        { displayModal === true ? null : <Button handleClick={openModal}/>}
        { displayModal === true ? 
          (<animated.div style={animation}>
              <Modal 
                handleXClick={closeModal} 
                displayModal={displayModal} 
                setDisplayModal={setDisplayModal}
              />
            </animated.div>
          ) : null 
        }
      </Container>
    </>
  );
};

export default App;