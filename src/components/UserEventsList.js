import React from 'react';
import { TouchableOpacity, ListItem, View, StyleSheet } from 'react-native';

const UserEventsList = ({ events }) => {
  console.log('here!!2')
  return ( 
         events.map((event, i) => (
          <TouchableOpacity key={i}>
            <ListItem
              key={event.eventID}
              leftAvatar={{
                source: {
                  uri:
                    `${event.uri}`
                }
              }}
              title={event.title}
              subtitle={`${event.dateTime}\n${
                event.town
              }\nOrganizer :${event.creatorUsername}`}
              style={styles.reviewBox}
            />
            </TouchableOpacity>
        ))
  )
  
}

const styles = StyleSheet.create({
  reviewBox: {
    fontSize: 6,
    backgroundColor: "#00BFFF",
    fontWeight: "600",
    borderColor: "#00BFFF",
    borderBottomWidth: 2,
    marginTop: 2
  },
})
 
export default UserEventsList;