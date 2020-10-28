const path = 'https://disease.sh/v3/covid-19/countries/'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getData(ars) {
  return fetch(path + ars + '?strict=true', headers)
    .then((response) => response.json())
}

export default {
  getData
}