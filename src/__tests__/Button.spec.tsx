import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Button from '../components/Button'

describe('Button Component', () => {
  test('should render Button Component', () => {
    render(<Button>Text</Button>)
    expect(screen.getByRole('button')).toBeTruthy()
  })
})
