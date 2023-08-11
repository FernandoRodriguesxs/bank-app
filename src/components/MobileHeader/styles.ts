import styled from 'styled-components'

export const MobileHeaderContainer = styled.header`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 45px;
    width: 45px;
  }
  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue.primary};
  }
`
export const Menu = styled.div`
  color: ${({ theme }) => theme.colors.blue.primary};
`
