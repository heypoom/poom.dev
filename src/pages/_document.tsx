import Document, { Head, Html, Main, NextScript } from "next/document"

interface Props {}

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
