import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  background-color: #90caf9;
  border: 0;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 13px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #648dae;
  }
`

interface Props {
  children: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick} >{children}</ButtonContainer>
}


//Functional Component
function Button2({ children, onClick }:Props) {
  return <ButtonContainer onClick={onClick} >{children}</ButtonContainer>
}

export default Button2
