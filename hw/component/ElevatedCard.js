import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


put in  App.js   ====>   <ElevatedCard/>





const ElevatedCards = () => {
  // Sample data for cards
  const cardsData = [
    { id: 1, title: 'Card 1', description: 'Description 1', imageSource: require('./Screenshot (100).png') },
    { id: 2, title: 'Card 2', description: 'Description 2', imageSource: require('./Screenshot (100).png') },
    { id: 3, title: 'Card 3', description: 'Description 3', imageSource: require('./Screenshot (100).png') },
    { id: 4, title: 'Card 4', description: 'Description 4', imageSource: require('./Screenshot (100).png') },
    { id: 5, title: 'Card 5', description: 'Description 5', imageSource: require('./Screenshot (100).png') },
    { id: 6, title: 'Card 6', description: 'Description 6', imageSource: require('./Screenshot (100).png') },
    { id: 7, title: 'Card 7', description: 'Description 7', imageSource: require('./Screenshot (100).png') },
    { id: 8, title: 'Card 8', description: 'Description 8', imageSource: require('./Screenshot (100).png') },
    { id: 9, title: 'Card 9', description: 'Description 9', imageSource: require('./Screenshot (100).png') },
    { id: 10, title: 'Card 10', description: 'Description 10', imageSource: require('./Screenshot (100).png') },
  ];

  return (
    <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {cardsData.map(card => (
        <View key={card.id} style={styles.cardContainer}>
          <Image source={card.imageSource} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   height: 200,
  },
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

export default ElevatedCards;
