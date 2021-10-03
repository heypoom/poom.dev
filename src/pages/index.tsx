import tw from "twin.macro"
import { styled } from "goober"

const Title = tw.div`
	flex items-center justify-center
	text-white text-8xl bg-purple-500
`

const Landing = () => {
  return <Title tw="min-h-screen">Phoomparin Mano</Title>
}

export default Landing
