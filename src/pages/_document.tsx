import Document, { Head, Html, Main, NextScript } from "next/document"
import { GlobalStyles } from "twin.macro"

interface Props {}

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500&display=swap"
            rel="stylesheet"
            crossOrigin="true"
          />
        </Head>

        <body tw="font-body">
          <GlobalStyles />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
