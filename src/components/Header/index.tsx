import { ButtonPrimary, ButtonText } from '../Button'
import { ButtonGroup, HeaderContainer, HeaderOptions, LogoBox } from './styles'
import logoImg from './../../assets/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <LogoBox>
          <img src={logoImg} alt="" />
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
