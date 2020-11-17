import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background: #000;
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  margin-bottom: 1em;
`

export default function Header() {
  return <Box>Silvano Amaral</Box>
}
