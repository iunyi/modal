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
  return (
    <Container>
      <Button />
    </Container>
  );
}

export default App;
