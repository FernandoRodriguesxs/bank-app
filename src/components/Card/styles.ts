import styled from 'styled-components'

export const CardContainer = styled.div`
  &::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 6px;
    width: 254px;
    height: 254px;
    border: 0.1px solid ${({ theme }) => theme.colors.purple.secondary};
    transform: rotate(3deg);
  }

  width: 256px;
  height: 256px;
  margin: 16px;

  border-radius: 6px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  background: ${({ theme }) => theme.colors.blue.tertiary};

  picture {
    display: flex;
    justify-content: center;
    padding: 5px 0;
    width: 72px;
    height: 72px;
    background: ${({ theme }) => theme.colors.blue.primary};
    border-radius: 999px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin-top: 16px;
  }

  p {
    margin-top: 8px;
  }
`
