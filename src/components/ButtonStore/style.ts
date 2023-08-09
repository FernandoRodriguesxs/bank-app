import styled from 'styled-components'

export const ButtonStoreStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 64px;
  width: 180px;
  border: 1px solid #cdd4d4;
  border-radius: 16px;
  background: transparent;
  color: ${({ theme }) => theme.colors.blue.primary};
  font-weight: 900;
`
