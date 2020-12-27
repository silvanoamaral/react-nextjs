import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import Login from '../pages/login'

describe('Login', () => {
  it('should render Login', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Login />)

    const button = getByText(`Acessar`)
    fireEvent.click(button)

    expect(button).toBeInstanceOf(HTMLElement)
    expect(handleClick).toBeTruthy()
  })
})
