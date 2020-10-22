import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../resources/api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {
  const [data, setData] = useState({})
  const [ars, setArs] = useState(' ')

  const getCovidData = useCallback(() => {
    Api.getData()
      .then(data => setData(data))
  }, [])

  useEffect(() => {    
    getCovidData()
  }, [getCovidData])

  const handleChange = ({ target }) => {
    const ars = target.value
    setArs(ars)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={data.data_dados}
          onChange={handleChange}
          ars={ars}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} ars={ars} />
    </ContainerStyled>
  )
}

export default memo(Main)
