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
      attendees: {...creatorUsername},
      lat,
      long,

    }

    firebase.database().ref('/Events').push(postEventData)
      
  })

}

export const editEvent = (eventID, name, firstLineOfAddress, town, postcode, type, description, dateTime, createdDate, noOfVolunteers, timeScale) => {
  const address = `${firstLineOfAddress}+${town}+${postcode}`
  getCoords(address)
    .then((res) => {
      const lat = res.data.results[0].geometry.location.lat
      const long = res.data.results[0].geometry.location.lng
      const updatedData = {
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
        lat,
        long,

      }
      firebase.database().ref(`/Events/${eventID}`).update(updatedData)
    })
    .catch(console.log);

}

export const getUserEvents = (user) => {
  //make a call to the events database 
  //check the attendees of each event 
  //return if the user is included in the attendees
}