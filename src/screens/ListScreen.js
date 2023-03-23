import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";


const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 45 },
        { name: "Friend #3", age: 32 },
        { name: "Friend #4", age: 27 },
        { name: "Friend #5", age: 53 },
        { name: "Friend #6", age: 30 },
        { name: "Friend #7", age: 21 },
        { name: "Friend #8", age: 19 },
        { name: "Friend #9", age: 18 },
    ];

    return (
        <View>
        <Text style={styles.textStyle}>List Screen</Text>
        <FlatList data={friends} showsVerticalScrollIndicator={false} keyExtractor={friend => friend.name} renderItem={({ item }) => {
            return <Text style={styles.listTextStyle}>{item.name} - Age {item.age}</Text>;  
        }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    listTextStyle: {
        fontSize: 20,
        marginVertical: 10,
    }
});

export default ListScreen;