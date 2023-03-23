import React from "react";
import { Text, StyleSheet } from "react-native";


const ComponentScreen = () => {
    const greeting = <Text style={styles.textStyle}>Hi There! This is a component screen!</Text>;
    return greeting;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

export default ComponentScreen;