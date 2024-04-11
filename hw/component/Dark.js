import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from "react-native"

const Dark = () => {
    const isDarkMode = useColorScheme() === "light"; // Check for dark mode
    console.log(isDarkMode)
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ?styles.darkText :  styles.whiteText}>dfkjgndkjfgnfkjgn</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' // Center text vertically
    },
    whiteText: {
        color: "#FFFFFF", // White color for light mode
    },
    darkText: {
        color: "#000000", // Black color for dark mode
    }
})

export default Dark;
