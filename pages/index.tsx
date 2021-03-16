import tw, { styled, TwStyle } from 'twin.macro'

const Banner = tw.div`p-5 bg-purple-500 text-white text-2xl shadow-lg`

type ButtonVariant = 'primary' | 'important'

interface ButtonProps {
  variant: ButtonVariant
}

const bgByVariantMap: Record<ButtonVariant, TwStyle> = {
  primary: tw`bg-purple-500 hover:bg-purple-600`,
  important: tw`bg-red-500 hover:bg-red-700`,
}

const Button = styled.button<ButtonProps>(({ variant }) => [
  variant && bgByVariantMap[variant],
  tw`px-5 py-2 text-white text-center focus:outline-none`,
])

const Home: React.FC = () => (
  <main>
    <Banner tw="border-purple-600 border-b-4 text-3xl font-semibold">
      Delicious Truffles
    </Banner>

    <div tw="min-h-screen flex items-center">
      <div tw="px-2 my-10 max-w-3xl mx-auto space-y-6">
        <h1 tw="text-5xl font-bold">Hey, There!</h1>

        <p tw="font-light">Glad that you're here.</p>

        <div tw="flex space-x-3">
          <Button variant="primary">Keep</Button>

          <Button variant="important" tw="font-bold">
            Delete
          </Button>
        </div>
      </div>
    </div>
  </main>
)

export default Home
