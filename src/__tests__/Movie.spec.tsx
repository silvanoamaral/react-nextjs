import React from 'react'
import { render, cleanup, act } from '@testing-library/react'

import Movie from '../pages/movie'

describe('Movie', () => {
  afterAll(cleanup)

  const renderComponent = () =>
    render(
      <Movie />
    )

  it('Render Page Movie', async () => {
    await act(async () => {
      const { getByTestId } = renderComponent()
      expect(getByTestId('title').innerHTML).toEqual('Vídeos')
    })
  })
})
