import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import styled from 'styled-components';

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

  return (
    <Container>
      <Button handleClick={openModal}/>
      { displayModal === true ? ( <Modal handleXClick={closeModal}/>) : null }
    </Container>
  );
}

export default App;
