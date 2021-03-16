import tw from 'twin.macro'

const Banner = tw.div`p-5 bg-purple-500 text-white text-2xl shadow-lg`
const Button = tw.button`bg-purple-500 px-5 py-2 text-white text-center`

const Home: React.FC = () => (
  <main>
    <Banner tw="border-purple-600 border-b-8 text-3xl">
      Delicious Truffles
    </Banner>

    <div tw="min-h-screen flex items-center">
      <div tw="px-5 my-10 max-w-3xl mx-auto space-y-6">
        <h1 tw="text-5xl font-bold">Hey, There!</h1>

        <p tw="font-light">Glad that you're here.</p>

        <Button tw="font-medium">Learn More</Button>
      </div>
    </div>
  </main>
)

export default Home
