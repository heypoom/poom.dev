import React from 'react'
import tw from 'twin.macro'

import { Button } from '@ui/button'
import { BottomBanner } from '@ui/bottom-banner'

import { Fadeable } from 'components/Fadeable'

const Banner = tw.header`p-5 bg-purple-500 text-white text-2xl shadow-lg`

const Home: React.FC = () => (
  <div>
    <Banner tw="border-purple-600 border-b-4 text-3xl font-semibold fixed w-full">
      Poom
    </Banner>

    <main tw="min-h-screen flex items-center justify-center bg-gray-100">
      <section tw="px-8 py-8 max-w-3xl mx-8 space-y-6 bg-white mt-20 shadow-2xl">
        <h1 tw="text-4xl font-bold text-gray-900">Hey. I'm Poom.</h1>

        <p tw="font-light text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          porta, enim et molestie lobortis, lacus ligula volutpat mauris,
          porttitor viverra dui libero id quam. Duis eu nulla in ipsum luctus
        </p>

        <div tw="flex space-x-3">
          <Button variant="primary" tw="shadow-lg">
            Open
          </Button>

          <Fadeable />

          <Button variant="important" tw="font-bold shadow-lg">
            Delete
          </Button>
        </div>
      </section>

      <BottomBanner />
    </main>
  </div>
)

export default Home
