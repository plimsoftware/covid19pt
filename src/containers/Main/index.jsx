import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../resources/api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled, Footer } from './style'

function Main() {
  const [data, setData] = useState({});
  const [ars, setArs] = useState('portugal');
  const [update, setUpdate] = useState('');
  const [flag, setFlag] = useState('');

  function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
  }
  
  const getCovidData = useCallback((ars) => {
    Api.getData(ars)
      .then(data => {
        console.log('fui buscar data');
        setData(data);
        let myDate = new Date(data.updated);
        setUpdate(`${zeroEsquerda(myDate.getDate())}/${zeroEsquerda(myDate.getMonth() +1 )}/${myDate.getFullYear()}  ${zeroEsquerda(myDate.getHours())}:${zeroEsquerda(myDate.getMinutes())}:${zeroEsquerda(myDate.getSeconds())} `);
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
          getCovidData={() => getCovidData(ars)}
        />
      </div>
      <Board data={data} ars={ars} />
      <Footer>
        <span>Produzido por: Luís Fernandes 2020<a href="https://www.plimsoftware.pt">www.plimsoftware.pt</a></span>
      </Footer>
    </ContainerStyled>
  )
}

export default memo(Main)
