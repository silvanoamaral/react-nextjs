import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../components/Header/Header'

describe('Header Component', () => {
  afterEach(cleanup);

  const renderComponent = () =>
  render(
    <Header />
  )

  it('should render Header', () => {
    const { getByText } = renderComponent()
    expect(getByText('Silvano Amaral')).toBeInTheDocument()
  })

  it('Should click button Nav', () => {
    const { getByTestId } = renderComponent()

    const menu = getByTestId('menu-hamburguer')

    fireEvent.click(menu)

    expect(menu).toBeInstanceOf(HTMLElement)
    expect(getByTestId('inputHamburguer')).toBeChecked()
  })
})

