import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1280px;
  padding: 0 48px;
  margin: 0 auto;
`

export const Hero = styled.div`
  height: calc(100vh - 96px);
  display: flex;
  justify-content: space-between;
  margin: 32px 0;

  .hero-box-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    h1 {
      color: ${({ theme }) => theme.colors.blue.primary};
      font-size: 56px;
      line-height: 64px;
    }

    p {
      margin-top: 16px;
      line-height: 32px;
    }
  }

  .hero-box-right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 300px;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 32px;
`

export const CardsSection = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.blue.primary};
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);

  .cards-section-content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    h2 {
      color: ${({ theme }) => theme.colors.white};
      margin-top: 150px;
      font-size: 32px;
    }
  }
`

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 32px 0 128px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`
export const CreditCardSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;


  .credit-card-content {
    h2 {
      color: ${({ theme }) => theme.colors.blue.primary};
      font-size: 32px;
    }
    
    ul {
      display: flex;
      flex-direction: column;

      margin: 24px 0;
      gap: 16px;

      li {
        display: flex;
        gap: 8px;
        
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${({ theme }) => theme.colors.purple.primary};
          border-radius: 999px;
          height: 24px;
          width: 24px;
          
        }
      }
    }
  }
  

`
