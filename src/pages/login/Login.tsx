import React from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'

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
        <Button
          type="button"
          onClick={() => console.log('Clicou no botao login')}
        >Acessar</Button>
      </Box>
    </Container>
  )
}

export default Login
