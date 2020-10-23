import React, { memo, useState, useEffect } from 'react'
//import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data, ars }) {
    const [confirmados, setConfirmados] = useState('');
    //const [confirmadosNovos, setConfirmadosNovos] = useState('');
    const [recuperados, setRecuperados] = useState('');
    const [obitos, setObitos] = useState('');
    const [ativos, setAtivos] = useState('');
    const [internados, setInternados] = useState('');
    const [internadosUci, setInternadosUci] = useState('');

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  useEffect(() => {    
    if (ars === ' ') {
      setConfirmados(data.confirmados);
      //setConfirmadosNovos(data.confirmados_novos);
      setRecuperados(data.recuperados);
      setObitos(data.obitos);
      setAtivos(data.ativos);
      setInternados(data.internados);
      setInternadosUci(data.internados_uci);
    }

    if (ars === '_arsnorte') {
      setConfirmados(data.confirmados_arsnorte);
      //setConfirmadosNovos('');
      setRecuperados(data.recuperados_arsnorte);
      setObitos(data.obitos_arsnorte);
      setAtivos(data.ativos_arsnorte);
      setInternados(data.internados_arsnorte);
      setInternadosUci(data.internados_uci_arsnorte);
    }

    if (ars === '_arscentro') {
      setConfirmados(data.confirmados_arscentro);
      //setConfirmadosNovos('');
      setRecuperados(data.recuperados_arscentro);
      setObitos(data.obitos_arscentro);
      setAtivos(data.ativos_arscentro);
      setInternados(data.internados_arscentro);
      setInternadosUci(data.internados_uci_arscentro);
    }

    if (ars === '_arslvt') {
      setConfirmados(data.confirmados_arslvt);
      //setConfirmadosNovos('');
      setRecuperados(data.recuperados_arslvt);
      setObitos(data.obitos_arslvt);
      setAtivos(data.ativos_arslvt);
      setInternados(data.internados_arslvt);
      setInternadosUci(data.internados_uci_arslvt);
    }

    if (ars === '_arsalentejo') {
      setConfirmados(data.confirmados_arsalentejo);
      //setConfirmadosNovos('');
      setRecuperados(data.recuperados_arsalentejo);
      setObitos(data.obitos_arsalentejo);
      setAtivos(data.ativos_arsalentejo);
      setInternados(data.internados_arsalentejo);
      setInternadosUci(data.internados_uci_arsalentejo);
    }

    if (ars === '_arsalgarve') {
      setConfirmados(data.confirmados_arsalgarve);
      //setConfirmadosNovos('');
      setRecuperados(data.recuperados_arsalgarve);
      setObitos(data.obitos_arsalgarve);
      setAtivos(data.ativos_arsalgarve);
      setInternados(data.internados_arsalgarve);
      setInternadosUci(data.internados_uci_arsalgarve);
    }

    if (ars === '_acores') {
      setConfirmados(data.confirmados_acores);
      //setConfirmadosNovos('');
      setRecuperados(data.recuperados_acores);
      setObitos(data.obitos_acores);
      setAtivos(data.ativos_acores);
      setInternados(data.internados_acores);
      setInternadosUci(data.internados_uci_acores);
    }

    if (ars === '_madeira') {
      setConfirmados(data.confirmados_madeira);
      //setConfirmadosNovos('');
      setRecuperados(data.recuperados_madeira);
      setObitos(data.obitos_madeira);
      setAtivos(data.ativos_madeira);
      setInternados(data.internados_madeira);
      setInternadosUci(data.internados_uci_madeira);
    }
  }, [ars, data.ativos, data.ativos_acores, data.ativos_arsalentejo, data.ativos_arsalgarve, data.ativos_arscentro, data.ativos_arslvt, data.ativos_arsnorte, data.ativos_madeira, data.confirmados, data.confirmados_acores, data.confirmados_arsalentejo, data.confirmados_arsalgarve, data.confirmados_arscentro, data.confirmados_arslvt, data.confirmados_arsnorte, data.confirmados_madeira, data.confirmados_novos, data.internados, data.internados_acores, data.internados_arsalentejo, data.internados_arsalgarve, data.internados_arscentro, data.internados_arslvt, data.internados_arsnorte, data.internados_madeira, data.internados_uci, data.internados_uci_acores, data.internados_uci_arsalentejo, data.internados_uci_arsalgarve, data.internados_uci_arscentro, data.internados_uci_arslvt, data.internados_uci_arsnorte, data.internados_uci_madeira, data.obitos, data.obitos_acores, data.obitos_arsalentejo, data.obitos_arsalgarve, data.obitos_arscentro, data.obitos_arslvt, data.obitos_arsnorte, data.obitos_madeira, data.recuperados, data.recuperados_acores, data.recuperados_arsalentejo, data.recuperados_arsalgarve, data.recuperados_arscentro, data.recuperados_arslvt, data.recuperados_arsnorte, data.recuperados_madeira])
  
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
      </Grid>}
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