import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Image Screen</Text>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/forest.jpg")}
                score={0.02}
            />
            <ImageDetail
                title="Beach"
                imageSource={require("../../assets/beach.jpg")}
                score={0.1}
            />
            <ImageDetail
                title="Mountain"
                imageSource={require("../../assets/mountain.jpg")}
                score={1.01}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default ImageScreen;
