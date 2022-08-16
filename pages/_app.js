import Head from "next/head";
import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Tour Guide</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="description" content="An information interface for tourist"/>
          <meta name="keywords" content="tour guide, tourist, travel, places"/>
          <meta name="author" content="Faiz Ahmed"/>
        </Head>
        <Component {...pageProps} />
      </>
      )

}

export default MyApp
