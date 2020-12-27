import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../components/Header/Header'

it('should render Header', () => {
  const { getByText } = render(<Header />)
  expect(getByText('Silvano Amaral')).toBeInTheDocument()
})
