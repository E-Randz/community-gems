import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import firebase from 'firebase'

// import { db } from "../../config/db";
// const db = firebase.database();

// let userRef = db.ref("/Users");

// class HomeScreen extends Component {
//   state = {
//     users: []
//   }

//   componentDidMount () {
//     // userRef.on("value", snapshot => {
//     //   let data = snapshot.val();
//     //   let users = Object.values(data);
//     //   this.setState({
//     //     users
//     //   });
//     // });
//   }

//   render () {
//     return
//       <Text>Hello</Text>
//   }
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

class HomeScreen extends Component {
  state = {
    events: [
      {
        title: 'event1',
        start: '2010-01-09T12:30:00',
        location: 'manchester',
        eventOrganizer: 'tom'
      },
      {
        title: 'event2',
        start: '2010-01-09T18:30:00',
        location: 'salford',
        eventOrganizer: 'peter'
      },
      {
        title: 'event1',
        start: '2010-01-09T12:30:00',
        location: 'manchester',
        eventOrganizer: 'user'
      },
      {
        title: 'event1',
        start: '2010-01-09T12:30:00',
        location: 'manchester',
        eventOrganizer: 'user'
      },
      {
        title: 'event1',
        start: '2010-01-09T12:30:00',
        location: 'manchester',
        eventOrganizer: 'user'
      },
      {
        title: 'event1',
        start: '2010-01-09T12:30:00',
        location: 'manchester',
        eventOrganizer: 'user'
      },
      {
        title: 'event1',
        start: '2010-01-09T12:30:00',
        location: 'manchester',
        eventOrganizer: 'user'
      },
      {
        title: 'event1',
        start: '2010-01-09T12:30:00',
        location: 'manchester',
        eventOrganizer: 'user'
      }
    ]
  }

  render () {
    const { events } = this.state

    return (
      <ScrollView>
        <View style={styles.userInfoBox}>
          <Text style={styles.userInfoName}>Tymmy123</Text>
        </View>
        <View style={styles.userData}>
          <Image
            style={styles.userIamge}
            source={require('../../../assets/heart.jpg')}
          />
          <Text style={styles.userText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
        </View>

        <View style={styles.buttonsBox}>
          <TouchableOpacity style={styles.userInfoBox_buttons}>
            <Text>View Leaderboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userInfoBox_buttons}>
            <Text>View Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventButtons}>
          <TouchableOpacity style={styles.userInfoBox}>
            <Text>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userInfoBox}>
            <Text>Attended</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventsList}>
          {events.map((event, i) => (
            <View key={i}>
              <Text>title {event.title}</Text>
              <Text>{event.start}</Text>
              <Text>{event.location}</Text>
              <Text>{event.eventOrganizer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 30
  },

  userInfoBox: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  userInfoName: {
    display: 'flex',
    flexDirection: 'row',
    color: 'grey',
    fontSize: 30

    // alignItems: 'flex - start'
  },

  userData: {
    flexDirection: 'row'
  },

  userIamge: {
    width: 150,
    height: 120,
    margin: 10
  },
  userText: {
    width: 220,
    height: 120,
    margin: 10
  },

  buttonsBox: {
    flexDirection: 'row',
    backgroundColor: 'red',
    borderRadius: 16
  },

  userInfoBox_buttons: {
    color: 'red',
    margin: 20,
    backgroundColor: 'red'
  },
  eventButtons: {
    flexDirection: 'row'
    // justifyContent: 'center'
  },
  eventsList: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// events: [
// {
//   title: 'event1',
//   start: '2010-01-09T12:30:00',
//   location: 'manchester',
//   eventOrganizer: 'tom'
// },
// {
//   title: 'event2',
//   start: '2010-01-09T18:30:00',
//   location: 'salford',
//   eventOrganizer: 'peter'
// }
// {
//   title: 'event1',
//   start: '2010-01-09T12:30:00',
//   location: 'manchester',
//   eventOrganizer: 'user'
// },
// {
//   title: 'event1',
//   start: '2010-01-09T12:30:00',
//   location: 'manchester',
//   eventOrganizer: 'user'
// },
// {
//   title: 'event1',
//   start: '2010-01-09T12:30:00',
//   location: 'manchester',
//   eventOrganizer: 'user'
// },
// {
//   title: 'event1',
//   start: '2010-01-09T12:30:00',
//   location: 'manchester',
//   eventOrganizer: 'user'
// },
// {
//   title: 'event1',
//   start: '2010-01-09T12:30:00',
//   location: 'manchester',
//   eventOrganizer: 'user'
// },
// {
//   title: 'event1',
//   start: '2010-01-09T12:30:00',
//   location: 'manchester',
//   eventOrganizer: 'user'
// },
// ]
