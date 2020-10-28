import React, { memo, useState, useEffect } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data, ars }) {
    const [confirmados, setConfirmados] = useState('');
    const [casosHoje, setCasosHoje] = useState('');
    const [recuperados, setRecuperados] = useState('');
    const [recuperadosHoje, setRecuperadosHoje] = useState('');
    const [obitos, setObitos] = useState('');
    const [obitosHoje, setObitosHoje] = useState('');
    const [ativos, setAtivos] = useState('');
    const [internados, setInternados] = useState('');
    const [internadosUci, setInternadosUci] = useState('');

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  useEffect(() => {    
    setConfirmados(data.cases);
    setCasosHoje(data.todayCases);
    setRecuperados(data.recovered);
    setRecuperadosHoje(data.todayRecovered);
    setObitos(data.deaths);
    setObitosHoje(data.todayDeaths);
    setAtivos(data.active);
    setInternados(data.internados);
    setInternadosUci(data.critical);

  }, [data.todayDeaths, data.todayRecovered, data.todayCases, data.active, data.cases, data.critical, data.deaths, data.internados, data.recovered])
  
  return (
    <Grid container spacing={3} justify="center" >
      {confirmados &&
      <Grid item xs={12} md={3}>
        <Card value={getValue(confirmados)} newvalue={casosHoje ? casosHoje : ''} label="Total de casos confirmados" color="#5d78ff" />
      </Grid>
      }
      {recuperados &&
      <Grid item xs={12} md={3}>
         <Card value={getValue(recuperados)} newvalue={recuperadosHoje ? recuperadosHoje : ''} label="Total de Recuperados" color="#67C887" />
      </Grid>}
      {obitos &&
      <Grid item xs={12} md={3}>
        <Card value={getValue(obitos)} newvalue={obitosHoje ? obitosHoje : ''} label="Total de Óbitos" color="#000" />
      </Grid>
      }
      {ativos &&
      <Grid item xs={12} md={3}>
        <Card value={getValue(ativos)} label="Ativos" color="#d68f0c" />
      </Grid>
      }
      {internados &&
      <Grid item xs={12} md={3}>
        <Card value={getValue(internados)} label="Internados" color="#fffd7b" />
      </Grid>
      }
      {internadosUci &&
      <Grid item xs={12} md={3}>
        <Card value={getValue(internadosUci)} label="UCI" color="#ff6e34" />
      </Grid>
      }
    </Grid>
  )
}

export default memo(Board)