import { ReactNode } from 'react'
import { ButtonStyled } from './styles'

interface IButtonProps {
  children: ReactNode
}
export const Button = ({  children }: IButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>
}
