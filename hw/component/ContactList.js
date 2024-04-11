import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';

in app.js ===>    <ContactList />



const ContactList = () => {
  // Sample data for contacts
  const contacts = [
    { id: 1, name: 'John Doe', mobile: '+1234567890', photo: require('./Screenshot (100).png') },
    { id: 2, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
     { id: 3, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
      { id: 4, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
       { id: 5, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
        { id: 6, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
         { id: 7, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
          { id: 8, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
           { id: 9, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
            { id: 10, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
             { id: 11, name: 'Jane Smith', mobile: '+9876543210', photo: require('./Screenshot (100).png') },
    // Add more contacts as needed
  ];

  return (
    <View style={styles.container}>
    <ScrollView >
      {contacts.map(contact => (
        <View key={contact.id} style={styles.contactContainer}>
          <Image source={contact.photo} style={styles.photo} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.mobile}>{contact.mobile}</Text>
          </View>
        </View>
      ))}
       </ScrollView >
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
      width:"100%",
      marginHorizontal:10

  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 10,
  
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mobile: {
    fontSize: 16,
    color: '#888888',
  },
});

export default ContactList;
