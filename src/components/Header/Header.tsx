import React, { useState } from 'react'
import styled from 'styled-components'

import Menu from '../Menu'

const Box = styled.div`
  background: #000;
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  margin-bottom: 1em;
  justify-content: space-between;
  padding: 0 20px;

  @media (min-width: 768px) {
    justify-content: center;
  }
`

const ButtonNav = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    display: none;
  }

  label {
    display: flex;
    padding: 11px 2px;
  }
`
const Hamburguer = styled.span`
  position: relative;
  display: block;
  background: #fff;
  width: 22px;
  height: 2px;
  top: 0px;
  left: 0;
  transition: 0.5s ease-in-out;

  &:before,
  &:after {
    background: #fff;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  &:before {
    top: -6px;
  }
  &:after {
    bottom: -6px;
  }
`

const InputNav = styled.input`
  display: none;

  &:checked ~ label span {
    transform: rotate(45deg);
  }

  &:checked ~ label span:before {
    transform: rotate(90deg);
    top: 0;
  }

  &:checked ~ label span:after {
    transform: rotate(90deg);
    bottom: 0;
  }
`

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const handleClickNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <>
      <Box>
        Silvano Amaral
        <ButtonNav>
          <InputNav
            id="menu-hamburguer"
            type="checkbox"
            defaultChecked={navOpen}
          />
          <label htmlFor="menu-hamburguer" onClick={() => handleClickNav()}>
            <Hamburguer />
          </label>
        </ButtonNav>
      </Box>

      <Menu isOpen={navOpen} handleClickNav={handleClickNav} />
    </>
  )
}
