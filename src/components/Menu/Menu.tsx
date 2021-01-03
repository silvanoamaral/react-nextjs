import React from 'react'
import styled from 'styled-components'

import TargetComponent from '../Target'

const Box = styled.nav`
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow-x: auto;
  background-color: rgb(255, 255, 255);
  position: absolute;
  left: 0px;
  right: 0px;
  top: 64px;
  height: calc(100vh - 64px);
  padding: 32px;
  display: flex;
  flex-direction: column;
  transform: translateY(-100vh);
  transition: transform 0.2s ease-out 0s;
  will-change: transform;

  @media (min-width: 768px) {
    padding: 0 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 30px;
    transform: translateX(0px);
    height: 100%;
    position: relative;
    top: 0;
  }

  &.menu-open {
    transform: translateY(0px);
  }
`

const ListMav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }
`

interface IProps {
  isOpen?: boolean
  handleClickNav: () => void
}

const dataRouter = [
  {
    id: 'home',
    label: 'Home',
    path: '/'
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/about'
  },
  {
    id: 'blog',
    label: 'Blog Post',
    path: '/blog'
  },
  {
    id: 'finance',
    label: 'Lista de Ações',
    path: '/finance'
  },
  {
    id: 'login',
    label: 'Área Restrita',
    path: '/login'
  }
]

export default function Menu({ isOpen, handleClickNav }: IProps) {
  return (
    <Box className={isOpen ? 'menu-open' : null} role="navigation">
      <ListMav>
        {dataRouter.map(nav => (
          <li key={nav.id}>
            <TargetComponent
              id={nav.id}
              label={nav.label}
              path={nav.path}
              clickNavFn={handleClickNav}
            />
          </li>
        ))}
      </ListMav>
    </Box>
  )
}
