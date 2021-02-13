import React from 'react'
import { render } from '@testing-library/react'

import About from '../pages/about'
import AboutModalView from '../pages/about/AboutModalView'

describe('Page About', () => {
  const renderComponent = () =>
    render(
      <About />
    )

  it('Render Page About', () => {
    const { getByTestId } = renderComponent()

    expect(getByTestId('title').innerHTML).toEqual(AboutModalView.title)
  })
})
