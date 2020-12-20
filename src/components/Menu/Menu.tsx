import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Box = styled.nav`
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 30px;
`

const ListMav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  list-style: none;
  margin: 0 auto;
`

const Menu = () => {
  return (
    <Box>
      <ListMav>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
        <li>
          <Link href="/finance">
            <a>finance</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Área Restrita</a>
          </Link>
        </li>
      </ListMav>
    </Box>
  )
}

export default function Header() {
  return <Menu />
}
