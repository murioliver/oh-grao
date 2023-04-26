import { ButtonContainer } from './Styled'

type ButtonProps = {
  text: string
  children?: React.ReactNode
}

export function Button({ text, children }: ButtonProps) {
  return (
    <ButtonContainer>
      <span>{text}</span>
      {children}
    </ButtonContainer>
  )
}