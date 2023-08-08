import styled from "styled-components"


export const ButtonStyled = styled.button`
  height: 42px;
  width: 96px;
  border-radius: 12px;

`

export const ButtonPrimary = styled(ButtonStyled)`
  background: ${({ theme }) => theme.colors.purple.primary};
  color: ${({ theme }) => theme.colors.white};
`

export const ButtonText = styled(ButtonStyled)` 
  color: ${({ theme }) => theme.colors.purple.secondary};
`

 
