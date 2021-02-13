import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import financeService from '../../service/financeService'
import FinanceModalView from './FinanceModalView'

const Pre = styled.pre`
  background: #ebebeb;
  max-width: 500px;
  width: 100%;
  max-height: 400px;
  overflow: auto;
`

function Finance() {
  const [finance, setFinance] = useState(false)

  const getFinance = async () => {
    const response = await financeService()
    setFinance(response)
  }

  useEffect(() => {
    getFinance()
  },[])

  return (
    <>
    <h1 data-testid="title">{FinanceModalView.title}</h1>

    {!finance && (
      <p data-testid="loading">Loading...</p>
    )}

    {finance &&
      <>
        <p>Ação: {finance[0].meta.symbol}</p>
        <p>Valor: {finance[0].meta.regularMarketPrice}</p>
        <Pre>
        {JSON.stringify(finance, undefined, 2)}
        </Pre>
      </>
    }
    </>
  )
}

export default Finance
