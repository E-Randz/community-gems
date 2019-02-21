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

        <View style={styles.container}>
          <View style={styles.userInfoBox}>
            <Text style={styles.userInfoName}>Tymmy123</Text>

            <View style={styles.userData}>
              <Image
                style={styles.userIamge}
                source={require('../../../assets/heart.jpg')}
              />
              <View style={styles.userText}>
                <Text style={styles.userText_content}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Text>
              </View>
            </View>

            <View style={styles.buttonsBox}>
              <TouchableOpacity style={styles.userInfoBox_buttons}>
                <Text>View Leaderboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userInfoBox_buttons}>
                <Text>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonsBox}>
            <TouchableOpacity style={styles.eventButtons}>
              <Text>Upcoming</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eventButtons}>
              <Text>Attended</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventsList}>
            {events.map((event, i) => (
              <View style={styles.eventParent} key={i}>
                <Text style={styles.eventTitle}>title: {event.title}</Text>
                <View style={styles.eventDetails}>
                  <Text>{event.start}</Text>
                  <Text>{event.location}</Text>
                  <Text>By: {event.eventOrganizer}</Text>
                </View>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 80
  },

  userInfoBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  userInfoName: {
    flexDirection: 'row',
    fontSize: 35,
    marginLeft: 40,
    color: 'grey',
    fontWeight: 'bold'

  },

  userData: {
    flexDirection: 'row'
  },

  userIamge: {
    width: 150,
    height: 120,
    margin: 10,
    borderRadius: 16
  },


  userText: {
    width: 220,
    height: 120,
    margin: 10
  },

  userText_content: {
    justifyContent: 'space-evenly',
    color: 'grey'
  },

  buttonsBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 16,
    justifyContent: 'space-evenly'
  },

  userInfoBox_buttons: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: '40%'
  },

  eventButtons: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    padding: 12,
    // margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    // borderColor: 'rgba(0, 0, 0, 0.1)',
    width: '48.5%',
    borderWidth: 2,
    borderColor: 'blue'
  },

  eventsList: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink'
  },

  eventParent: {
    width: '90%',
    marginBottom: 15,
    borderBottomWidth: 2
  },
  eventTitle: {
    fontWeight: 'bold'
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'

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
