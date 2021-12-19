import React from "react"
import tw from "twin.macro"
import Head from "next/head"

const Backdrop = tw.main`
  flex flex-col items-center justify-center bg-gradient-to-tr from-neonblue to-lavender
  min-h-screen px-2 text-white
`

const ColorLab = () => {
  return (
    <section>
      <Head>
        <title>Phoomparin Mano ﹒ Software Developer</title>

        <meta
          name="description"
          content="Phoomparin Mano is a developer who loves TypeScript and the Terminal. He's currently the Head of Platform at BRIKL."
        />
      </Head>

      <Backdrop tw="space-y-5 shadow-xl z-20 min-h-[80vh]">
        <div tw="flex space-x-4">
          <div tw="border-solid border-4 bg-blackrussian w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-white w-14 h-14 border-blackrussian rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-transparent w-14 h-14 border-blackrussian rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-transparent w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-red-400 w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-green-400 w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-blue-400 w-14 h-14 border-white rounded-full shadow-xl" />

          <div tw="border-solid border-4 bg-gradient-to-tr from-neonblue to-lavender w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-gradient-to-tr from-skylight to-lavender-100 w-14 h-14 border-white rounded-full shadow-xl" />
        </div>
      </Backdrop>

      <section tw="flex flex-col items-center justify-center min-h-[50vh] bg-blackrussian z-10">
        <div tw="flex space-x-4">
          <div tw="border-solid border-4 bg-transparent w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-white w-14 h-14 border-blackrussian rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-transparent w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-red-400 w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-green-400 w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-blue-400 w-14 h-14 border-white rounded-full shadow-xl" />

          <div tw="border-solid border-4 bg-gradient-to-tr from-neonblue to-lavender w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-gradient-to-tr from-skylight to-lavender-100 w-14 h-14 border-white rounded-full shadow-xl" />
        </div>
      </section>

      <section tw="flex flex-col items-center justify-center min-h-[25vh] bg-red-400 z-10">
        <div tw="flex space-x-4">
          <div tw="border-solid border-4 bg-transparent w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-white w-14 h-14 border-blackrussian rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-transparent w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-red-400 w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-green-400 w-14 h-14 border-white rounded-full shadow-xl" />
          <div tw="border-solid border-4 bg-blue-400 w-14 h-14 border-white rounded-full shadow-xl" />

          <div tw="border-solid border-4 bg-gradient-to-tr from-neonblue to-lavender w-14 h-14 border-white rounded-full shadow-xl" />

          <div tw="border-solid border-4 bg-gradient-to-tr from-skylight to-lavender-100 w-14 h-14 border-white rounded-full shadow-xl" />
        </div>
      </section>
    </section>
  )
}

export default ColorLab
