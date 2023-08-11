import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 96px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
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

export const HeaderOptions = styled.ul`
  display: flex;

  li {
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    transition: all 0.3s;
  }

  li:first-child {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.yellow.primary};
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`
