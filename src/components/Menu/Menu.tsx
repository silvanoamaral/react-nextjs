import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <ul>
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
    </ul>
  )
}

export default function Header() {
  return <Menu />
}
