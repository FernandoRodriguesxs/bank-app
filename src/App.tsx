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
  Footer,
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
  TwitterLogo,
  LinkedinLogo,
  MetaLogo,
  GooglePlayLogo,
  AppStoreLogo,
} from '@phosphor-icons/react'
import CreditCardImg from './assets/credit-card.png'
import IphoneCardImg from './assets/iphone-card.png'
import { ButtonPrimary, ButtonSecondary } from './components/Button'
import { MobileHeader } from './components/MobileHeader'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

export const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <MobileHeader />
      </Wrapper>
      <main>
        <Wrapper>
          <Hero>
            <div className="hero-box-left">
              <h1>
                Stronger Banking <br /> Greater Service
              </h1>
              <p>
                Our financial institution offers a wide range of services, from
                loans and financing to investments and wealth management.
              </p>
              <ButtonGroup>
                <ButtonStore>
                  <span>
                    <AppStoreLogo size={24} />
                  </span>
                  <span>App Store</span>
                </ButtonStore>
                <ButtonStore>
                  <span>
                    <GooglePlayLogo size={24} />
                  </span>
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
            <ScrollAnimation animateIn="animate__fadeInUp">
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
            </ScrollAnimation>
          </div>
        </CardsSection>

        <Wrapper>
          <CreditCardSection>
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <picture>
                <img src={CreditCardImg} alt="Cartão de Crédito" />
              </picture>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInRight">
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
            </ScrollAnimation>
          </CreditCardSection>
        </Wrapper>
        <Wrapper>
          <DownloadMobileApp>
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <div className="download-mobile-app-content">
                <h2>
                  Download <br />
                  the Mobile App
                </h2>
                <p>
                  Discover a new experience by downloading our amazing app!
                  Availability of unique features, an intuitive interface and
                  convenient access to essential services
                </p>
                <DownloadMobileButtonGroup>
                  <ButtonStore>
                    <span>
                      <AppStoreLogo size={24} />
                    </span>
                    <span>App Store</span>
                  </ButtonStore>
                  <ButtonStore>
                    <span>
                      <GooglePlayLogo size={24} />
                    </span>
                    <span>Play store</span>
                  </ButtonStore>
                </DownloadMobileButtonGroup>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInRight">
              <picture>
                <img src={IphoneCardImg} alt="Iphone Home" />
              </picture>
            </ScrollAnimation>
          </DownloadMobileApp>
        </Wrapper>
        <Wrapper>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <BoxQuestion>
              <picture>
                <img src={heroImg} alt="Iphone Branco" />
              </picture>
              <div className="Question-Text">
                <h2>Have any Questions?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry`&apos;s standard dummy text
                </p>
                <ButtonSecondary>Read FAQ&apos;s</ButtonSecondary>
              </div>
            </BoxQuestion>
          </ScrollAnimation>
        </Wrapper>
      </main>
      <Wrapper>
        <Footer>
          <div className="logo-footer">
            <h2>Screder</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul className="social-media">
              <li>
                <MetaLogo size={24} />
              </li>
              <li>
                <TwitterLogo size={24} />
              </li>
              <li>
                <LinkedinLogo size={24} />
              </li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Support Carrer</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>WathsApp</li>
              <li>Support 24</li>
            </ul>
          </div>
        </Footer>
      </Wrapper>
    </>
  )
}
