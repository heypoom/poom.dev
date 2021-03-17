import { Button } from '@ui/button'
import React from 'react'
import tw, { styled, TwStyle } from 'twin.macro'

const Banner = tw.header`p-5 bg-purple-500 text-white text-2xl shadow-lg`

const Home: React.FC = () => (
  <div>
    <Banner tw="border-purple-600 border-b-4 text-3xl font-semibold fixed w-full">
      Delicious Truffles
    </Banner>

    <main tw="min-h-screen flex items-center bg-gray-900">
      <section tw="px-8 py-8 max-w-3xl mx-auto space-y-6 shadow-lg bg-gray-100 mt-20">
        <h1 tw="text-5xl font-bold text-gray-900">Hey, There!</h1>

        <p tw="font-light text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          porta, enim et molestie lobortis, lacus ligula volutpat mauris,
          porttitor viverra dui libero id quam. Duis eu nulla in ipsum luctus
          rutrum in nec lorem. Suspendisse eget lacinia nibh. Curabitur massa
          velit, euismod at nisl nec, faucibus eleifend mauris. Morbi blandit
          lectus et sapien faucibus vestibulum. Mauris blandit turpis metus,
          vitae porta turpis tempor eget. Nam lorem dolor, accumsan sit amet
          rutrum in, imperdiet ut libero. Mauris quis condimentum lectus.
          Integer ullamcorper, dolor a ultrices fringilla, ipsum magna congue
          sem, a blandit massa justo eget massa. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Quisque
          posuere, est in viverra porta, purus velit pulvinar diam, quis viverra
          magna mauris ullamcorper quam. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Suspendisse eget eros euismod, luctus velit
          at, mattis lacus. Maecenas non quam et ante accumsan consequat eu
          suscipit ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>

        <div tw="flex space-x-3">
          <Button variant="primary">Keep</Button>

          <Button variant="important" tw="font-bold">
            Delete
          </Button>
        </div>
      </section>
    </main>
  </div>
)

export default Home
