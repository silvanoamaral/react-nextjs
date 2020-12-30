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

const Target = styled.a`
  color: #000;
`

const Menu = () => {
  return (
    <Box>
      <ListMav>
        <li>
          <Link href="/">
            <Target>Home</Target>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Target>About Us</Target>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <Target>Blog Post</Target>
          </Link>
        </li>
        <li>
          <Link href="/finance">
            <Target>finance</Target>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <Target>Área Restrita</Target>
          </Link>
        </li>
      </ListMav>
    </Box>
  )
}

export default function Header() {
  return <Menu />
}
