import heroImg from '././assets/hero-mobile2.png'
import { Header } from './components/Header'
import { ButtonStore } from './components/ButtonStore'
import {
  BoxQuestion,
  ButtonGroup,
  CardsContainer,
  CardsSection,
  CreditCardSection,
  DownloadMobileApp,
  DownloadMobileButtonGroup,
  Hero,
  Wrapper,
} from './App.style'
import { Card } from './components/Card'
import {
  Check,
  HandCoins,
  Bank,
  DeviceMobile,
  CreditCard,
  DeviceMobileSpeaker,
  GraduationCap,
} from '@phosphor-icons/react'
import CreditCardImg from './assets/credit-card.png'
import IphoneCardImg from './assets/iphone-card.png'
import { ButtonPrimary, ButtonSecondary } from './components/Button'

export const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <main>
        <Wrapper>
          <Hero>
            <div className="hero-box-left">
              <h1>
                Stronger Banking <br /> Greater Service
              </h1>
              <p>
                A nossa instituição financeira oferece uma ampla variedade de
                serviços, desde empréstimos e financiamentos até investimentos e
                gestão de patrimônio.
              </p>
              <ButtonGroup>
                <ButtonStore>
                  <span>App store</span>
                </ButtonStore>
                <ButtonStore>
                  <span>Play store</span>
                </ButtonStore>
              </ButtonGroup>
            </div>
            <picture className="hero-box-right">
              <img src={heroImg} alt="" />
            </picture>
          </Hero>
        </Wrapper>
        <CardsSection>
          <div className="cards-section-content">
            <h2>Screder Features</h2>
            <CardsContainer>
              <Card
                IconPicture={<HandCoins size={56} />}
                title="Multi Currency"
                subtitle="We Realize ideias from simple toomplex. Read More"
              />
              <Card
                IconPicture={<Bank size={56} />}
                title="Multi Currency"
                subtitle="We Realize ideias from simple toomplex. Read More"
              />
              <Card
                IconPicture={<DeviceMobile size={56} />}
                title="Multi Currency"
                subtitle="We Realize ideias from simple toomplex. Read More"
              />
              <Card
                IconPicture={<DeviceMobileSpeaker size={56} />}
                title="Multi Currency"
                subtitle="We Realize ideias from simple toomplex. Read More"
              />
              <Card
                IconPicture={<CreditCard size={56} />}
                title="Multi Currency"
                subtitle="We Realize ideias from simple toomplex. Read More"
              />
              <Card
                IconPicture={<GraduationCap size={56} />}
                title="Multi Currency"
                subtitle="We Realize ideias from simple toomplex. Read More"
              />
            </CardsContainer>
          </div>
        </CardsSection>
        <Wrapper>
          <CreditCardSection>
            <picture>
              <img src={CreditCardImg} alt="Cartão de Crédito" />
            </picture>
            <div className="credit-card-content">
              <h2>
                Get Physic Visa Card <br /> and Virtual Card
              </h2>
              <ul>
                <li>
                  <span>
                    <Check size={16} color="white" />
                  </span>
                  Manage your expenses
                </li>
                <li>
                  <span>
                    <Check size={16} color="white" />
                  </span>
                  Gain security control against
                </li>
                <li>
                  <span>
                    <Check size={16} color="white" />
                  </span>
                  Earn increase Visa Card
                </li>
              </ul>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
          </CreditCardSection>
        </Wrapper>
        <Wrapper>
          <DownloadMobileApp>
            <div className="download-mobile-app-content">
              <h2>
                Download <br />
                the Mobile App
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`&apos;s standard
                dummy text{' '}
              </p>
              <DownloadMobileButtonGroup>
                <ButtonStore>
                  <span>App store</span>
                </ButtonStore>
                <ButtonStore>
                  <span>Play store</span>
                </ButtonStore>
              </DownloadMobileButtonGroup>
            </div>
            <picture>
              <img src={IphoneCardImg} alt="Iphone Home" />
            </picture>
          </DownloadMobileApp>
        </Wrapper>
        <Wrapper>
          <BoxQuestion>
            <picture>
              <img src={heroImg} alt="Iphone Branco" />
            </picture>
            <div className="Question-Text">
              <h2>Have any Questions?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`&apos;s standard
                dummy text
              </p>
              <ButtonSecondary>Read FAQ&apos;s</ButtonSecondary>
            </div>
          </BoxQuestion>
        </Wrapper>
      </main>
    </>
  )
}
