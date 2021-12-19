import dynamic from "next/dynamic"

const BookshelfView = dynamic(() => import("../../three-views/BookshelfView"), {
  ssr: false,
})

const Page = () => {
  return <BookshelfView />
}

export default Page
