import firebase from 'firebase'
import getCoords from '../utils';

export const postNewUser = (uid, username, firstName, surname, email, houseNo, street, town, postcode, long, lat) => {
  const description = `Hi I am ${username}!`
  firebase.database().ref(`/Users/${uid}`)
    .set(
      {
        description,
        username,
        firstName,
        surname,
        email,
        houseNo,
        street,
        town,
        postcode,
        long,
        lat,
        gems : 0,
      }
    )
}

export const getUserByID = (userID) => {
  firebase.database().ref(`/Users/${userID}`)
    .once('value')
    .then((snapshot) => {
      return snapshot.val();
    })
}

export const editUser = (userID, description, house_number, streetName, town, postcode) => {
  const address = `${house_number}+${streetName}+${town}+${postcode}`;
  getCoords(address)
  .then((res) => {
    const postData = {
      house_number,
      streetName,
      town,
      postcode,
      lat,
      long
    }
    const lat = res.data.results[0].geometry.location.lat
    const long = res.data.results[0].geometry.location.lng
    firebase.database().ref(`/Users/${userID}`).update(postData);
  })
  
}