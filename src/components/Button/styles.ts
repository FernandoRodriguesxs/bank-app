import styled from 'styled-components'

const ButtonStyled = styled.button`
  height: 42px;
  width: 96px;
  border-radius: 12px;
`

export const ButtonPrimaryStyled = styled(ButtonStyled)`
  background: ${({ theme }) => theme.colors.purple.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
`

export const ButtonSecondaryStyled = styled(ButtonStyled)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue.primary};
`

export const ButtonTextStyled = styled(ButtonStyled)`
  color: ${({ theme }) => theme.colors.purple.secondary};
`
