import firebase from "firebase";
import { getCoords } from "../utils";

export const postNewEvent = (
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
  creatorUid
) => {
  const address = `${firstLineOfAddress}+${town}+${postcode}`
  return getCoords(address).then(res => {
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
      attendees: { [creatorUid]: { username: creatorUsername } },
      lat,
      long,
      isClosed: false
    }

    const userEventData = {
      name,
      town,
      type,
      description,
      dateTime,
      creatorUsername
    }

    const newPostKey = firebase
      .database()
      .ref()
      .child('/Events')
      .push().key

    const updates = {}
    updates['/Events/' + newPostKey] = postEventData
    updates['/Users/' + creatorUid + '/Events/' + newPostKey] = userEventData

    return firebase
      .database()
      .ref()
      .update(updates)
  })
}

export const joinEvent = (event, userID, username) => {
  const addEventAttendee = { username }
  const { name, town, type, description, dateTime, creatorUsername } = event
  const userEventData = {
    name,
    town,
    type,
    description,
    dateTime,
    creatorUsername
  }

  const updates = {}
  updates['/Events/' + event.eventID + '/attendees'] = addEventAttendee
  updates['/Users/' + userID + '/Events/' + event.eventID] = userEventData

  return firebase
    .database()
    .ref()
    .update(updates)
}

export const editEvent = (
  eventID,
  name,
  firstLineOfAddress,
  town,
  postcode,
  type,
  description,
  dateTime,
  createdDate,
  noOfVolunteers,
  timeScale
) => {
  const address = `${firstLineOfAddress}+${town}+${postcode}`
  getCoords(address)
    .then(res => {
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
        long
      }
      firebase
        .database()
        .ref(`/Events/${eventID}`)
        .update(updatedData)
    })
    .catch(console.log)
}

export const getEventUsers = eventID => {
  firebase
    .database()
    .ref(`/Events/${eventID}/attendees`)
    .once('value')
    .then(snapshot => {
      console.log(snapshot.val())
    })
}

export const addUserToEvent = (eventID, username, userID) => {
  const eventAttendee = {
    [userID]: [username]
  }
  firebase
    .database()
    .ref(`/Events/${eventID}`)
    .child('attendees')
    .update(eventAttendee)
    .catch(console.log)
}

export const deleteUserFromEvent = (eventID, userID) => {
  firebase
    .database()
    .ref(`/Events/${eventID}/attendees/`)
    .child(userID)
    .remove()
    .catch(console.log)
}

export const getEvents = async () => {
  const snapshot = await firebase
    .database()
    .ref('/Events')
    .once('value')
  return snapshot.val()
}

export const getEventByID = async eventID => {
  const snapshot = await firebase
    .database()
    .ref(`/Events/${eventID}`)
    .once('value')
  return snapshot.val()
}
