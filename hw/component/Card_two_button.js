






import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Card_two_button = ({ title, description, imageSource }) => {
  const handleReadMore = () => {
    // Handle Read More button press
    console.log('Read More button pressed');
  };

  const handleFollowMe = () => {
    // Handle Follow Me button press
    console.log('Follow Me button pressed');
  };

  return (
  	<View  style={styles.Container}>
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleReadMore} style={styles.button}>
            <Text style={styles.buttonText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFollowMe} style={styles.button}>
            <Text style={styles.buttonText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </View>
  );
};

const styles = StyleSheet.create({
	Container: {
    width: '100%',
   marginHorizontal:6
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    justifyContent:"center",
    alignItems:"center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:"90%"
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal:10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Card_two_button
;
