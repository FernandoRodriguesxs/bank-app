import { ReactNode } from 'react'
import { ButtonStyled } from './styles'

interface IButtonProps {
  type: 'primary' | 'text'
  children: ReactNode
}
export const Button = ({ type, children }: IButtonProps) => {
  return <ButtonStyled type={type}>{children}</ButtonStyled>
}
