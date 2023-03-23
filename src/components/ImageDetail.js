import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
    return (
        <View>
            <Text style={styles.imageHeader}>Image Detail</Text>
            <Image source={props.imageSource} />
            <Text style={styles.imageTitle}>{props.title}</Text>
            <Text style={styles.imageScore}>Image Score - {props.score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageHeader: {
        fontSize: 25,
        fontWeight: "bold",
    },
    imageTitle: {
        fontSize: 20,
    },
    imageScore: {
        fontSize: 15,
        fontWeight: "italic",
    },
});

export default ImageDetail;
