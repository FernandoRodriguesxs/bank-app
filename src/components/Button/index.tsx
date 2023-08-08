import { ReactNode } from 'react'
import {
  ButtonTextStyled,
  ButtonPrimaryStyled,
  ButtonSecondaryStyled,
} from './styles'

interface IButtonPrimaryProps {
  children: ReactNode
}

interface IButtonTextProps {
  children: ReactNode
}

interface IButtonSecondaryProps {
  children: ReactNode
}

export const ButtonPrimary = ({ children }: IButtonPrimaryProps) => {
  return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>
}

export const ButtonSecondary = ({ children }: IButtonSecondaryProps) => {
  return <ButtonSecondaryStyled>{children}</ButtonSecondaryStyled>
}

export const ButtonText = ({ children }: IButtonTextProps) => {
  return <ButtonTextStyled>{children}</ButtonTextStyled>
}
