import tw, { styled, TwStyle } from 'twin.macro'

type ButtonVariant = 'primary' | 'important'

interface ButtonProps {
  variant: ButtonVariant
}

const bgByVariantMap: Record<ButtonVariant, TwStyle> = {
  primary: tw`bg-purple-500 hover:bg-purple-600`,
  important: tw`bg-red-500 hover:bg-red-700`,
}

export const Button = styled.button<ButtonProps>(({ variant }) => [
  variant && bgByVariantMap[variant],
  tw`px-5 py-2 text-white text-center focus:outline-none`,
])
