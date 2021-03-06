import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import withReduxSaga from 'next-redux-saga'

import { wrapper } from '../redux/core/store'
import GlobalStyle from '../styles/global'
import Header from '../components/Header'

const themePath = require(`../themes/${process.env.NEXT_PUBLIC_THEME_NAME}`)

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
       navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope)
          },
          function (err) {
            console.log('Service Worker registration failed: ', err)
          }
        )
      })
    }

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', event => {
      console.log("Install Prompt fired")
      // For older browsers
      event.preventDefault()
      deferredPrompt = event

    })

  }, [])

  return (
    <>
      <Head>

        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Projeto desenvolvimento com TypeScript, React, NextJS e Styled Components'
        />
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
        <link rel='manifest' href='/manifest.json' />

        <link
          href='https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700'
          rel='stylesheet'
        />
        <title>Create Next App</title>
      </Head>
      <ThemeProvider theme={themePath?.default}>
        <GlobalStyle />

        <Header />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(withReduxSaga(App))
