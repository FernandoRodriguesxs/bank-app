import { CardContainer } from './styles'
import { ReactNode } from 'react'

interface ICardProps {
  IconPicture: ReactNode
  title: string
  subtitle: string
}
export const Card = ({ IconPicture, title, subtitle }: ICardProps) => {
  return (
    <CardContainer>
      <picture>{IconPicture}</picture>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </CardContainer>
  )
}
