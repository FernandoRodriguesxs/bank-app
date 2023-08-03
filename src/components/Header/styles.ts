import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 96px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`
export const LogoBox = styled.div`
  p {
    font-size: 24px;
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

