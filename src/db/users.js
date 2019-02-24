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

export const getUserByID = userID => {
  firebase
    .database()
    .ref(`/Users/${userID}`)
    .once("value")
    .then(snapshot => {
      return snapshot.val();
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
        houseNo,
        street,
        town,
        postcode,
        lat,
        long
      };

      firebase
        .database()
        .ref(`/Users/${userID}`)
        .update(postData);
    })
    .catch(console.log);
};

export const addReview = (uid, review_body, review_date) => {
  const review = {
    review_body,
    review_date
  };

  firebase
    .database()
    .ref(`/Users/${uid}/reviews`)
    .push(review);
};
