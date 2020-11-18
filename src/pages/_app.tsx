import React from 'react'
import { AppProps } from 'next/app'

import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

import Header from '../components/Header'
import Menu from '../components/Menu'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <Menu />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
