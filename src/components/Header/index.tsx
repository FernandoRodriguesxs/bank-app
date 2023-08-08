import { ButtonPrimary, ButtonText } from '../Button/styles'
import { HeaderContainer, HeaderOptions, LogoBox } from './styles'

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
        <div>
          <ButtonText>Log in</ButtonText>
          <ButtonPrimary>Sign up</ButtonPrimary>
        </div>
      </nav>
    </HeaderContainer>
  )
}
