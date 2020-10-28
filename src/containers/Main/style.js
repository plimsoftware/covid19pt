import styled from 'styled-components'

export const ContainerStyled = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1024px;
`
export const Footer = styled.div`
  width: 100%;
  margin-top: 60px;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  justify-content: center;
  text-align: center;

  span {
    background: rgba(42, 102, 199, 0.7);
    border-radius: 10px;
    padding: 10px;
  }

  a {
    color: white;
    margin-left: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
  }
`

