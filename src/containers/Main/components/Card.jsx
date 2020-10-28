import React, { memo } from 'react'
//import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  ValueStyled1,
  CardContentStyled
} from './style'

function Card({ value, newvalue, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        {newvalue && <ValueStyled1>(+{newvalue})</ValueStyled1>}
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)