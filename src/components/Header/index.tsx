import { ButtonPrimary, ButtonText } from '../Button'
import { ButtonGroup, HeaderContainer, HeaderOptions, LogoBox } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <LogoBox>
          <p>Screder</p>
        </LogoBox>
        <HeaderOptions>
          <li>Features</li>
          <li>About us</li>
          <li>Pricing</li>
          <li>Contact us</li>
        </HeaderOptions>
        <ButtonGroup>
          <ButtonText>Log in</ButtonText>
          <ButtonPrimary>Sign up</ButtonPrimary>
        </ButtonGroup>
      </nav>
    </HeaderContainer>
  )
}
