import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  background-color: #141414;
  color: #fff;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
`

export default function Button() {
    return (
        <StyledButton>Modal</StyledButton>
    )
}
