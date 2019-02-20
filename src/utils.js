const opencage = require('opencage-api-client')

const getCords = (address) => {
  opencage.geocode(address) 
  .then(data => {
        coords = data.results.geometry
        return coords
        }
    )
    .catch(error => { console.log('error', error.message)})
}

export default getCords