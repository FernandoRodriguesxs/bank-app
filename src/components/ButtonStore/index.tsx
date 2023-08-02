import { ReactNode } from 'react'
import { ButtonStoreStyled } from './style'

interface IButtonStoreProps {
  children: ReactNode
}

export const ButtonStore = ({ children }: IButtonStoreProps) => {
  return <ButtonStoreStyled>{children}</ButtonStoreStyled>
}
