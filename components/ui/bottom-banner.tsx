export const BottomBanner = () => {
  return (
    <div tw="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
      <div tw="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div tw="p-2 rounded-lg bg-indigo-600 shadow-lg sm:p-3">
          <div tw="flex items-center justify-between flex-wrap">
            <div tw="w-0 flex-1 flex items-center">
              <span tw="flex p-2 rounded-lg bg-indigo-800">
                <svg
                  tw="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p tw="ml-3 font-medium text-white truncate">
                <span tw="md:hidden">We announced a new product!</span>
                <span tw="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
              </p>
            </div>
            <div tw="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                tw="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                Learn more!
              </a>
            </div>
            <div tw="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                tw="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-10">
                <span tw="sr-only">Dismiss</span>

                <svg
                  tw="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
