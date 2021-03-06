import styled from 'styled-components'
import { CardContent, Typography } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.3rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`
export const ValueStyled1 = styled(Typography)`
  font-weight: 400;
  font-size: 1.5rem;
  color: green;
`

export const TypoStyled = styled(Typography)`
  margin-left: 10px;

  img {
    width: 100px;
    border-radius: 30%;
  }
`

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
  background: #f7faff;
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background: #d5e1f5;

  #refresh {
    width: 10px;
    cursor: pointer;
  }
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`