import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data, ars }) {
    const [confirmados, setConfirmados] = useState(data.confirmados);
    const [recuperados, setRecuperados] = useState(data.recuperados);
    const [obitos, setObitos] = useState(data.obitos);
    const [ativos, setAtivos] = useState(data.ativos);
    const [internados, setInternados] = useState(data.internados);
    const [internadosUci, setInternadosUci] = useState(data.internados_uci);

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  useEffect(() => {    
    if (ars === ' ') {
      setConfirmados(data.confirmados);
      setRecuperados(data.recuperados);
      setObitos(data.obitos);
      setAtivos(data.ativos);
      setInternados(data.internados);
      setInternadosUci(data.internados_uci);
    }

    if (ars === '_arsnorte') {
      setConfirmados(data.confirmados_arsnorte);
      setRecuperados(data.recuperados_arsnorte);
      setObitos(data.obitos_arsnorte);
      setAtivos(data.ativos_arsnorte);
      setInternados(data.internados_arsnorte);
      setInternadosUci(data.internados_uci_arsnorte);
    }

    if (ars === '_arscentro') {
      setConfirmados(data.confirmados_arscentro);
      setRecuperados(data.recuperados_arscentro);
      setObitos(data.obitos_arscentro);
      setAtivos(data.ativos_arscentro);
      setInternados(data.internados_arscentro);
      setInternadosUci(data.internados_uci_arscentro);
    }
  }, [ars, data.ativos, data.ativos_arscentro, data.ativos_arsnorte, data.confirmados, data.confirmados_arscentro, data.confirmados_arsnorte, data.internados, data.internados_arscentro, data.internados_arsnorte, data.internados_uci, data.internados_uci_arscentro, data.internados_uci_arsnorte, data.obitos, data.obitos_arscentro, data.obitos_arsnorte, data.recuperados, data.recuperados_arscentro, data.recuperados_arsnorte])
  
  return (
    <Grid container spacing={3} justify="center" >
      {confirmados &&
      <Grid item xs={12} md={3}>
        <Card value={getValue(confirmados)} label="Total de casos confirmados" color="#5d78ff" />
      </Grid>
      }
      {recuperados &&
      <Grid item xs={12} md={3}>
         <Card value={getValue(recuperados)} label="Total de Recuperados" color="#67C887" />
      </Grid>
      }
      {obitos &&
      <Grid item xs={12} md={3}>
        <Card value={getValue(obitos)} label="Total de Óbitos" color="#000" />
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