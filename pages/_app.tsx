import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <meta name="description" content="Free Discord Nitro generator!" />
        <title>Nitro Generator V2</title>
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="icons/icon-192x192.png"></link>
        <meta name="theme-color" content="#282c34" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
