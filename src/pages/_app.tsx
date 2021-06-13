import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Register Switch - Time spent performing tasks</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="title"
          content="Register Switch - Time spent performing tasks"
        />
        <meta
          name="description"
          content="Time spent executing tasks in a simple way to enable and disable"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://register-switch.vercel.app/" />
        <meta
          property="og:title"
          content="Register Switch - Time spent performing tasks"
        />
        <meta
          property="og:description"
          content="Time spent executing tasks in a simple way to enable and disable"
        />
        <meta
          property="og:image"
          content="https://register-switch.vercel.app/thumbnail.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://register-switch.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Register Switch - Time spent performing tasks"
        />
        <meta
          property="twitter:description"
          content="Time spent executing tasks in a simple way to enable and disable"
        />
        <meta
          property="twitter:image"
          content="https://register-switch.vercel.app/thumbnail.png"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
