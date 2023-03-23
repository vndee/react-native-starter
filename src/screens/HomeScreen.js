import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Hi There!</Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Components")}
            >
                <Text>Go to Components Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("ListScreen")}
            >
                <Text>Go to List Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("ImageScreen")}
            >
                <Text>Go to Image Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("CounterScreen")}
            >
                <Text>Go to Counter Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("ColorScreen")}
            >
                <Text>Go to Color Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("SquareScreen")}
            >
                <Text>Go to Square Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("TextScreen")}
            >
                <Text>Go to Text Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("BoxScreen")}
            >
                <Text>Go to Box Demo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
