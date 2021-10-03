import tw from "twin.macro"
import { styled } from "goober"

const Backdrop = tw.main`
	flex items-center justify-center
	 bg-purple-500
	min-h-screen px-2
`

const Title = tw.h1`
	text-white text-center px-2
	text-xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl
`

const Landing = () => {
  return (
    <Backdrop>
      <Title>Phoomparin Mano</Title>
    </Backdrop>
  )
}

export default Landing
