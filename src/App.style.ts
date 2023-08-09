import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1280px;
  padding: 32px;
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

    h1 {
      color: ${({ theme }) => theme.colors.blue.primary};
      font-size: 3.5rem;
      line-height: 64px;
    }

    p {
      margin-top: 16px;
      line-height: 32px;
    }
  }

  .hero-box-right {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }

    img {
      height: 600px;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`

export const CardsSection = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.blue.primary};
  padding: 16px;
  /* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%); */

  .cards-section-content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    h2 {
      color: ${({ theme }) => theme.colors.white};
      margin-top: 150px;
      font-size: 2.25rem;
    }
  }
`

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin: 32px 0 128px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const CreditCardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 72px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  picture {
    img {
      height: 400px;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .credit-card-content {
    h2 {
      color: ${({ theme }) => theme.colors.blue.primary};
      font-size: 2.25rem;
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
export const DownloadMobileApp = styled.section`
  display: flex;
  justify-content: space-around;

  margin: 72px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  .download-mobile-app-content {
    display: flex;
    flex-direction: column;

    h2 {
      color: ${({ theme }) => theme.colors.blue.primary};
      font-size: 2.25rem;
    }
  }

  picture {
    width: 100%;

    img {
      width: 600px;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  margin-top: 32px;

  button {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`

export const DownloadMobileButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const BoxQuestion = styled.section`
  display: flex;
  justify-content: space-around;

  color: ${({ theme }) => theme.colors.white};

  height: 300px;

  @media (max-width: 768px) {
    height: auto;
  }

  margin: 32px 0;

  background: rgb(221, 136, 71);
  background: linear-gradient(
    90deg,
    rgba(221, 136, 71, 1) 0%,
    rgba(122, 62, 94, 1) 51%,
    rgba(63, 16, 110, 1) 79%
  );

  border-radius: 15px;

  overflow: hidden;

  padding: 16px;

  .Question-Text {
    max-width: 600px;

    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    gap: 16px;

    h2 {
      font-size: 2.25rem;
    }
  }

  picture {
    margin-top: 16px;

    img {
      height: 450px;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`
export const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  h2 {
    margin-bottom: 16px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.blue.primary};

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  ul {
    display: flex;
    flex-direction: column;

    margin-top: 16px;
    font-size: 14px;
    gap: 8px;

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  .logo-footer {
    @media (max-width: 768px) {
      text-align: center;
    }
    h2 {
      font-size: 32px;
    }
  }
  .social-media {
    display: flex;
    flex-direction: row;
    gap: 8px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      border-radius: 6px;
      background: #e1e1e9;
    }
  }
`
