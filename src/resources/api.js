const path = 'https://covid19-api.vost.pt/Requests/get_last_update'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getData() {
  return fetch(path, headers)
    .then((response) => response.json())
}

export default {
  getData
}