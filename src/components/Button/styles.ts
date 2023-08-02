import styled from 'styled-components'

interface IButtonProps {
  type: 'primary' | 'text'
}

export const ButtonStyled = styled.button<IButtonProps>`
  background: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.purple.primary : 'none'};
  color: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.white : theme.colors.blue.primary};
  height: 42px;
  width: 96px;
  border-radius: 12px;
`
