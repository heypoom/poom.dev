import React from "react"
import tw from "twin.macro"
import { styled } from "goober"
import Head from "next/head"

const Backdrop = tw.main`
  flex flex-col items-center justify-center bg-gradient-to-tr from-neonblue to-lavender
  min-h-screen px-2 text-white
`

const Title = tw.h1`
  text-center px-2 text-white my-0 font-medium
  text-2xl xs:text-4xl sm:text-5xl md:text-6xl
`

const Link: React.FC<{ href: string }> = ({ href, children }) => (
  <a
    tw="text-white text-xs xs:text-sm sm:text-lg"
    target="_blank"
    rel="noreferrer"
    href={href}
  >
    {children}
  </a>
)

const Landing = () => {
  return (
    <Backdrop tw="space-y-5">
      <Head>
        <title>Phoomparin Mano ﹒ Software Developer</title>

        <meta
          name="description"
          content="Phoomparin Mano is a developer who loves TypeScript and the Terminal. He's currently the Head of Platform at BRIKL."
        />
      </Head>

      <div tw="flex flex-col shadow-carbon mx-3 rounded-lg">
        <div tw="flex bg-blackrussian px-3 py-2 space-x-2 rounded-t-lg">
          <div tw="w-3 h-3 bg-red-500 rounded-full"></div>
          <div tw="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div tw="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div tw="flex flex-col items-center justify-center bg-charade px-5 py-8 rounded-b-lg md:py-12 md:px-14">
          <Title tw="md:mb-4">Phoomparin Mano</Title>

          <p tw="text-xl">@heypoom</p>

          <section tw="flex space-x-2">
            <Link href="https://github.com/heypoom">GitHub</Link>
            <Link href="https://facebook.com/phoomparin.mano">Facebook</Link>
            <Link href="https://twitter.com/heypoom">Twitter</Link>
          </section>
        </div>
      </div>
    </Backdrop>
  )
}

export default Landing
