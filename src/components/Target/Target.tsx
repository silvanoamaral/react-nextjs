import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Target = styled.a`
  color: #000;
`

interface IProps {
  id: string
  label: string
  path: string
  clickNavFn?: () => void
}

export default function TargetComponent({
  id,
  label,
  path,
  clickNavFn
}: IProps) {
  return (
    <Link href={path}>
      <Target data-testid={id} onClick={clickNavFn}>
        {label}
      </Target>
    </Link>
  )
}
