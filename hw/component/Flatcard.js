import React from 'react';
import { View, Text, StyleSheet, useColorScheme, Image, TouchableOpacity } from "react-native"


call through main     <Flatcard  title="Card Title"
        description="Card Description"
        imageSource={require('./Screenshot (100).png')}/>
     



const Flatcard = ({ title, description, imageSource, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardWrapper: {
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: 'space-between', // Space evenly between the cards
    paddingHorizontal: 10, // Add some horizontal padding
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100', // Adjust width to fit two cards in a row with some spacing
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    padding: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default Flatcard;
