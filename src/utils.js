const opencage = require('opencage-api-client')

const getCords = (address) => {
  opencage.geocode(address) 
}

export default getCords