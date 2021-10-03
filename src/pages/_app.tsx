import type { AppProps, AppContext } from "next/app"

import React from "react"
import { setup } from "goober"
import { createGlobalStyles } from "goober/global"

const GlobalStyles = createGlobalStyles`
  body {
    margin: 0;
		font-weight: 300;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

setup(React.createElement)

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
