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

class EventViewOrganiser extends Component {
  state = {
    volunteers: [
      {
        name: 'Sam',
        prop1: 'something',
        prop2: 'some info'
      },
      {
        name: 'Peter',
        prop1: 'another something',
        prop2: 'other info'
      },
      {
        name: 'Mobutu Sese seko Nkuku Ngbendu Wa za banga',
        prop1: 'almost the same',
        prop2: 'same kind of info'
      }
    ],

    isVolunteer: true
  }

  render () {
    const { volunteers, isVolunteer } = this.state

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.eventImage_parent}>
            <Image
              style={styles.eventImage}
              source={require('../../../assets/location.jpeg')}
            />
          </View>

          <View style={styles.eventBox}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventTitleText}>
                Event title here, from DB/props
              </Text>
            </View>

            <View style={styles.dateInfo}>
              <Text style={styles.dateInfo_text}>
                {'we can use Moment here, npm install moment --save '}
              </Text>
            </View>

            <View style={styles.infoParent}>
              <View style={styles.userText}>
                <Text style={styles.gem}>💎 3 / all day, </Text>
                <Image
                  style={styles.userIcon}
                  source={require('../../../assets/users.png')}
                />
                <Text> x {volunteers.length}</Text>
              </View>
            </View>

            <View style={styles.userDataParent}>
              <View style={styles.detailsTextParent}>
                <Text style={styles.detailsText}>Detials:</Text>
              </View>
              <View style={styles.descriptionTextParent}>
                <Text style={styles.descriptionText}>
                  Brief description of the event goes here!! Brief description
                  of the event goes here!! Brief description of the event goes
                  here!! Brief description of the event goes here!! Brief
                  description of the event goes here!! Brief description of the
                  event goes here!!
                </Text>
              </View>
            </View>

            <View style={styles.buttonsBox}>
              <TouchableOpacity
                style={styles.location_buttons}
                // onPress={() => this.props.navigation.navigate('')}
              >
                <Text>Map</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.location_buttons}
                // onPress={() => this.props.navigation.navigate('')}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.isVolunteer}>
            {isVolunteer ? (
              volunteers.map((volunteer, i) => (
                <View style={styles.isVolunteerTrue} key={i}>
                  <Text style={styles.isVolunteerTrueChild1}>
                    {volunteer.name}
                  </Text>
                  <Text>{volunteer.prop1}</Text>
                  <Text>{volunteer.prop2}</Text>
                </View>
              ))
            ) : (
              <View style={styles.isVolunteerFalse}>
                <Text style={styles.isVolunteerFalseChild1}>
                  There are no volunteers for this event.
                </Text>
                <Text style={styles.isVolunteerFalseChild2}>Yet!</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    )
  }

  handleIsVolunteer = () => {
    this.setState({
      pastEvent: true
    })
  }
}

export default EventViewOrganiser

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30
  },

  eventImage_parent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 40
  },

  eventImage: {
    borderRadius: 16
  },

  eventBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingLeft: 30
  },

  eventTitle: {
    flexDirection: 'column',
    textAlign: 'left'
  },

  eventTitleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  dateInfo: {
    flexDirection: 'column',
    textAlign: 'left'
  },

  dateInfo_text: {
    fontSize: 16
  },

  infoParent: {
    flexDirection: 'row',
    textAlign: 'left'
  },
  userText: {
    flexDirection: 'row'
  },

  userIcon: {
    width: 20,
    height: 20
    // marginLeft: 20
  },
  userDataParent: {
    flexDirection: 'row',
    paddingTop: 20,
    marginRight: 20
  },

  detailsTextParent: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  detailsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10
  },

  buttonsBox: {
    flexDirection: 'row',
    borderRadius: 16,
    // justifyContent: ,
    padding: 20,
    marginLeft: -30
  },

  location_buttons: {
    backgroundColor: 'lightblue',
    padding: 6,
    marginLeft: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: '25%',
    alignSelf: 'center'
  },

  isVolunteer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'lightpink'
  },

  isVolunteerTrue: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink'
  },

  isVolunteerTrueChild1: {},

  isVolunteerFalse: {
    width: '90%',
    marginBottom: 15,
    borderBottomWidth: 2
  },
  isVolunteerFalseChild1: {
    fontWeight: 'bold'
  },
  isVolunteerFalseChild2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
})
