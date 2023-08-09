import { List } from '@phosphor-icons/react'
import { LogoBox, Menu, MobileHeaderContainer } from './styles'

export const MobileHeader = () => {
  return (
    <MobileHeaderContainer>
      <LogoBox>
        <p>Screder</p>
      </LogoBox>
      <Menu>
        <List size={32} />
      </Menu>
    </MobileHeaderContainer>
  )
}
