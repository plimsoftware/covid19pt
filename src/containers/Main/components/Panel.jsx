import React, { memo } from 'react'
//import RefreshIcon from '../../../assets/images/refresh.png'
import flagTemp from '../../../assets/images/portugal.png'
import { Card, Button, Select, MenuItem } from '../../../components'
import ZONES from '../../../commons/constants/zones'
import { CardPanelContentStyled, ItemStyled, TypoStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, ars, flag, getCoviddata }) {
  const { confirmados, obitos } = data;

  const renderArs = (ars, index) => (
    <MenuItem key={`ars-${index}`} value={ars.value}>
      <ItemStyled>
        <div>{ars.label}</div>
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `ARS: ${ars} - confirmados: ${confirmados}, óbitos: ${obitos}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${ars}`,
      text: textCovid19,
      url: 'https://covid19portugal.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Partilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <TypoStyled variant="h5" component="span" color="primary"><img src={flag ? flag : flagTemp} alt="Portugal" /> COVID19</TypoStyled>
          <TypoStyled variant="h6" component="span" color="primary">Informação diária</TypoStyled>
          <TypoStyled variant="body2" component="span" color="primary">Atualizado em: {updateAt ? updateAt : 0}</TypoStyled>
          <div className="pt-2">
            <Select onChange={onChange} value={ars}>
              {ZONES.map(renderArs)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)