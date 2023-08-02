import { Button } from '../Button'
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
          <Button type="text">Log in</Button>
          <Button type="primary">Sign up</Button>
        </div>
      </nav>
    </HeaderContainer>
  )
}
