import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


App.js code ==> <FancyCard title="Card 1" description="Description 1" imageSource={require("./Screenshot (100).png")} />
      <FancyCard title="Card 2" description="Description 2" imageSource={require("./Screenshot (100).png")} />
      <FancyCard title="Card 3" description="Description 3" imageSource={require("./Screenshot (100).png")} />
      <FancyCard title="Card 4" description="Description 4" imageSource={require("./Screenshot (100).png")} />
      <FancyCard title="Card 5" description="Description 5" imageSource={require("./Screenshot (100).png")} />
  





const FancyCard = ({ title, description, imageSource }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    padding: 5,
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

export default FancyCard;
