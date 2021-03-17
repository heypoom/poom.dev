import { Button } from '@ui/button'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

export function Fadeable() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        tw="bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 focus:ring-opacity-30 shadow-lg">
        Save
      </Button>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        I will fade in and out
      </Transition>
    </>
  )
}
