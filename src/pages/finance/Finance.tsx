import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import financeService from '../../service/financeService'

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

  if (!finance)
    return <p>Aguarde</p>

  return (
    <>
    <h1>Finance</h1>
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
