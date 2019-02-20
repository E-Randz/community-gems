import firebase from 'firebase'

const postUserbyID = (username, firstName, surname, email, houseNo, street, postcode, long, lat) => {
  firebase.database().ref('/Users')
    .push(
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

export default postUserbyID