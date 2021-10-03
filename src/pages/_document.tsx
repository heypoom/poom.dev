import { extractCss } from "goober"
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

interface Props {
  css: string
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const pageProps = await Document.getInitialProps(ctx)

    // Extrach the css for each page render
    const css = extractCss()

    return { ...pageProps, css }
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id={"_goober"}
            dangerouslySetInnerHTML={{ __html: " " + this.props.css }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
