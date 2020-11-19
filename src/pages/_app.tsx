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
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Projeto desenvolvimento com TypeScript, React, NextJS e Styled Components"
        />
        <link rel="manifest" href="/manifest.json" />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700"
          rel="stylesheet"
        />
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
