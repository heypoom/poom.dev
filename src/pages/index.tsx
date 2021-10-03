import tw from "twin.macro"
import { styled } from "goober"

const Backdrop = tw.main`
  flex flex-col items-center justify-center bg-purple-500
  min-h-screen px-2 text-white
`

const Title = tw.h1`
  text-center px-2 text-white my-0
  text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl
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
      <Title tw="md:mb-4">Phoomparin Mano</Title>

      <p tw="text-xl">@heypoom</p>

      <section tw="flex space-x-2">
        <Link href="https://github.com/heypoom">GitHub</Link>
        <Link href="https://facebook.com/phoomparin.mano">Facebook</Link>
        <Link href="https://twitter.com/heypoom">Twitter</Link>
      </section>
    </Backdrop>
  )
}

export default Landing
