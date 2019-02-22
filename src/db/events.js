import firebase from 'firebase'
import getCoords from '../utils'

export const postNewEvent = (name, firstLineOfAddress, town, postcode, type, description, dateTime, createdDate, noOfVolunteers, timeScale, creatorUsername, creatorUid, participants ) => {
  const address = `${firstLineOfAddress}+${town}+${postcode}`
  getCoords(address)
  .then((res) => {
    const lat = res.data.results[0].geometry.location.lat
    const long = res.data.results[0].geometry.location.lng

    const postEventData = {
      name,
      firstLineOfAddress,
      town,
      postcode,
      type,
      description,
      dateTime,
      createdDate,
      noOfVolunteers,
      timeScale,
      creatorUsername,
      creatorUid,
      lat,
      long,

    }

    firebase.database().ref('/Events').push(postEventData)
      
  })

}