import React from 'react'
import { render, cleanup, act } from '@testing-library/react'

import Finance from '../pages/finance'
import financeViewModel from '../pages/finance/FinanceModalView'
import financeService from '../service/financeService'

jest.mock('../service/financeService');

describe('Finance', () => {
  afterAll(cleanup)

  const waitTimeout = () => new Promise((resolve) => setTimeout(resolve, 0));

  const renderComponent = () =>
    render(
      <Finance />
    )

  it('Render Page Finance', async () => {
    await act(async () => {
      const { getByTestId } = renderComponent()
      expect(getByTestId('title').innerHTML).toEqual(financeViewModel.title)
    })
  })

  it('Should show a message Loading', async () => {
      await act(async () => {
        const { getByTestId } = renderComponent()

        await waitTimeout()
        expect(getByTestId('loading').innerHTML).toEqual(financeViewModel.loading);
        expect(financeService).toHaveBeenCalledTimes(1);

       // jest.spyOn()
      })
  })

})
