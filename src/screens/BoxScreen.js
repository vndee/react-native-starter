import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BoxScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 30, marginLeft: 20 }}>Box Screen</Text>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
                <Text style={styles.textStyle}>Child #4</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        borderWidth: 1,
        borderColor: "red",
        margin: 20,
        padding: 10,
    },
    viewStyle: {
        height: 700,
        borderWidth: 3,
        borderColor: "black",
        margin: 20,
        justifyContent: "center",
    },
});

export default BoxScreen;
