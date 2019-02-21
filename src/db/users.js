import firebase from 'firebase'

export const postNewUser = (uid, username, firstName, surname, email, houseNo, street, postcode, long, lat) => {
  firebase.database().ref(`/Users/${uid}`)
    .set(
      {
        username,
        firstName,
        surname,
        email,
        houseNo,
        street,
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