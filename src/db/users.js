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

export const getUserByID = async (userID) => {
  const snapshot = await firebase.database().ref(`/Users/${userID}`).once('value')
  return snapshot.val();
}

export const editUser = (userID, description, houseNo, street, town, postcode) => {
  const address = `${houseNo}+${street}+${town}+${postcode}`;
  getCoords(address)
  .then((res) => {
    const lat = res.data.results[0].geometry.location.lat
    const long = res.data.results[0].geometry.location.lng

    const postData = {
      houseNo,
      street,
      town,
      postcode,
      lat,
      long
    }
    
    firebase.database().ref(`/Users/${userID}`).update(postData);
  })
  .catch(console.log);
  
}