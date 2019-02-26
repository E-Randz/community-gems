import firebase from "firebase";
import getCoords from "../utils";

export const postNewUser = (
  uid,
  username,
  firstName,
  surname,
  email,
  houseNo,
  street,
  town,
  postcode,
  long,
  lat
) => {
  const description = `Hi I am ${username}!`;
  firebase
    .database()
    .ref(`/Users/${uid}`)
    .set({
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
      gems: 0
    });
};

export const editUser = (
  userID,
  description,
  houseNo,
  street,
  town,
  postcode
) => {
  const address = `${houseNo}+${street}+${town}+${postcode}`;
   getCoords(address)
    .then(res => {
      const lat = res.data.results[0].geometry.location.lat;
      const long = res.data.results[0].geometry.location.lng;
      const postData = {
        description,
        houseNo,
        street,
        town,
        postcode,
        lat,
        long
      };

      return firebase
        .database()
        .ref(`/Users/${userID}`)
        .update(postData)
    })
};

export const editUserPhoto = (userID, uri) => {
  const image = {
    image: uri
  }
  return firebase
        .database()
        .ref(`/Users/${userID}`)
        .update(image)
}

export const getUserByID = async (userID) => {
  const snapshot = await firebase.database().ref(`/Users/${userID}`).once('value')
  return snapshot.val();
}

export const getUserEvents = (userID) => {
  firebase.database().ref(`/Users/${userID}/Events`)
    .once('value')
    .then((snapshot) => {
      console.log(snapshot.val());
    })
}

export const addEventToUser = (userID, event) => {
  firebase.database().ref(`/Users/${userID}`)
  .child('Events')
  .update(event)
  .catch(console.log)
}

export const deleteEventFromUser = (userID, eventID) => {
  firebase.database().remove(`/Users/${userID}/Events/`)
  .child(eventID)
  .remove()
  .catch(console.log)
}


export const addReview = (uid, reviewer_uid, reviewer_username, review_body, review_date) => {
  const review = {
    review_body,
    review_date,
    reviewer_uid,
    reviewer_username
  };

  firebase
    .database()
    .ref(`/Users/${uid}/reviews`)
    .push(review);
};


