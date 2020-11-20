import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const Input = styled.input`
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding: 0 10px;
  height: 40px;

  &:focus {
    border-color: #90caf9;
  }
`

const Label = styled.label`
  display: flex;
  width: 100%;
  margin: 5px 0;
`

const Button = styled.button`
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

function Login() {
  return (
    <Container>
      <h1>Login</h1>
      <Box>
        <Label>Usuário*</Label>
        <Input type="text" name="user" />
      </Box>
      <Box>
        <Label>Senha*</Label>
        <Input type="password" name="user" />
      </Box>

      <Box>
        <Button>Acessar</Button>
      </Box>
    </Container>
  )
}

export default Login
