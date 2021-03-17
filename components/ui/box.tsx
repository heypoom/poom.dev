interface Props {
  name: string
}

export const Box: React.FC<Props> = ({name}) => {
  return <h1>My name is {name}</h1>
}
