import heroImg from '././assets/hero-mobile2.png'
import { Header } from './components/Header'
import { ButtonStore } from './components/ButtonStore'
import { ButtonGroup, CardsContainer, CardsSection, Hero, Wrapper } from '.'
import { Card } from './components/Card'

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
            <div className="hero-box-right">
              <img src={heroImg} alt="" />
            </div>
          </Hero>
        </Wrapper>
        <CardsSection>
          <div className="cards-section-content">
            <h2>Screder Features</h2>
            <CardsContainer>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </CardsContainer>
          </div>
        </CardsSection>
      </main>
    </>
  )
}
