import firebase from 'firebase'

const postNewUser = (uid, username, firstName, surname, email, houseNo, street, postcode, long, lat) => {
  firebase.database().ref('/Users')
    .push(
      {
        uid,
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

export default postNewUser;