import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState("");

    return (
        <View>
            <Text style={styles.text}>Text Screen</Text>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            {name.length < 5 ? (
                <Text>Name must be longer than 5 characters</Text>
            ) : (
                <Text>Your name is {name}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    input: {
        margin: 15,
        borderColor: "grey",
        borderWidth: 1,
    },
});

export default TextScreen;
