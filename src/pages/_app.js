import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo-config'

import GlobalStyles from '../styles/global'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://wwwmarketing.scdn.co/img/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://wwwmarketing.scdn.co/img/favicon-32x32.png"
        />
        <meta name="theme-color" content="#1db954" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#1db954"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
}

export default App
