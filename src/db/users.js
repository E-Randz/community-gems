import firebase from 'firebase'

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