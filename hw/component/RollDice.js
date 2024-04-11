import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Button } from 'react-native';

const RollDice = ({navigation}) => {
    const [images, setImages] = useState({
    	raku: require("./assets/One.png"),
        One: require("./assets/One.png"),
        Two: require("./assets/Two.png"),
        Three: require("./assets/Three.png"),
        Four: require("./assets/Four.png"),
        Five: require("./assets/Five.png"),
        Six: require("./assets/Six.png")
    });

    const hash = ["Two", "Three", "Four", "Five", "Six"];

    const generate = () => {
        const res = hash[Math.floor(Math.random() * 5)];
        setImages({ ...images, raku: images[res] });
    }


    return (
        <View>
            <TouchableOpacity onPress={generate}>
                <Image source={images.raku} />
                <Text>Click Here</Text>
            </TouchableOpacity>

            <Button title="Go to Tic" onPress={()=>navigation.navigate("Tic")}/>
        </View>
    );
}

export default RollDice;