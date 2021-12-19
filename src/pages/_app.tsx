import type { AppProps } from "next/app"

import React from "react"
import { GlobalStyles } from "twin.macro"

import "../styles/global.css"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
