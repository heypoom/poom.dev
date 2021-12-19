import React from "react"

import "twin.macro"

export const TerminalWindow: React.FC = ({ children }) => {
  return (
    <div tw="flex flex-col shadow-carbon mx-3 rounded-lg">
      <div tw="flex bg-blackrussian px-3 py-2 space-x-2 rounded-t-lg">
        <div tw="w-3 h-3 bg-red-500 rounded-full"></div>
        <div tw="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div tw="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <div tw="flex flex-col items-center justify-center bg-charade px-5 py-8 rounded-b-lg md:py-12 md:px-14">
        {children}
      </div>
    </div>
  )
}
