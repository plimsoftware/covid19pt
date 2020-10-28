import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../resources/api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {
  const [data, setData] = useState({});
  const [ars, setArs] = useState('portugal');
  const [update, setUpdate] = useState('');
  const [flag, setFlag] = useState('');

  const getCovidData = useCallback((ars) => {
    Api.getData(ars)
      .then(data => {
        setData(data);
        let myDate = new Date( data.updated);
        setUpdate(myDate.toLocaleString());
        setFlag(data.countryInfo.flag);
      })

      
  }, [])

  useEffect(() => {    
    getCovidData(ars)
  }, [getCovidData, ars])

  const handleChange = ({ target }) => {
    const ars = target.value
    setArs(ars)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={update}
          onChange={handleChange}
          flag={flag}
          ars={ars}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} ars={ars} />
    </ContainerStyled>
  )
}

export default memo(Main)
