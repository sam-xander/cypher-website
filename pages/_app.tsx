import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>Cypher Seals NFT</title>
        <meta name="description" content="Web3 brand empowering project teams and investors." />}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default App
