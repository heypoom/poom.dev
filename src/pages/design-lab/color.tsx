import React from "react"
import tw from "twin.macro"
import Head from "next/head"

const Backdrop = tw.main`
  flex flex-col items-center justify-center bg-gradient-to-tr from-neonblue to-lavender
  min-h-screen px-2 text-white
`

const Circle = tw.div`
	border-solid border-4 rounded-full shadow-xl
	border-white w-14 h-14
`

const Section = tw.section`flex space-x-4`

const ColorLab = () => {
  return (
    <div>
      <Head>
        <title>Phoomparin Mano ﹒ Software Developer</title>

        <meta
          name="description"
          content="Phoomparin Mano is a developer who loves TypeScript and the Terminal. He's currently the Head of Platform at BRIKL."
        />
      </Head>

      <Backdrop tw="space-y-5 shadow-xl z-20 min-h-[80vh]">
        <Section>
          <Circle tw="bg-blackrussian" />
          <Circle tw="bg-white border-blackrussian" />
          <Circle tw="bg-transparent border-blackrussian" />
          <Circle tw="bg-transparent" />
          <Circle tw="bg-red-400" />
          <Circle tw="bg-green-400" />
          <Circle tw="bg-blue-400" />

          <Circle tw="bg-gradient-to-tr from-neonblue to-lavender" />
          <Circle tw="bg-gradient-to-tr from-skylight to-lavender-100" />
        </Section>
      </Backdrop>

      <div tw="flex flex-col items-center justify-center min-h-[50vh] bg-blackrussian z-10">
        <Section>
          <Circle tw="bg-transparent" />
          <Circle tw="bg-white border-blackrussian" />
          <Circle tw="bg-transparent" />
          <Circle tw="bg-red-400" />
          <Circle tw="bg-green-400" />
          <Circle tw="bg-blue-400" />

          <Circle tw="bg-gradient-to-tr from-neonblue to-lavender" />
          <Circle tw="bg-gradient-to-tr from-skylight to-lavender-100" />
        </Section>
      </div>

      <div tw="flex flex-col items-center justify-center min-h-[25vh] bg-red-400 z-10">
        <Section>
          <Circle tw="bg-transparent border-white" />
          <Circle tw="bg-white border-blackrussian" />
          <Circle tw="bg-transparent border-white" />
          <Circle tw="bg-red-400 border-white" />
          <Circle tw="bg-green-400 border-white" />
          <Circle tw="bg-blue-400 border-white" />

          <Circle tw="bg-gradient-to-tr from-neonblue to-lavender border-white" />
          <Circle tw="bg-gradient-to-tr from-skylight to-lavender-100 border-white" />
        </Section>
      </div>
    </div>
  )
}

export default ColorLab
