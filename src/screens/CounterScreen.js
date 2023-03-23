import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const CounterScreen = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "increase":
                return { ...state, counter: state.counter + action.payload };
            case "decrease":
                return { ...state, counter: state.counter - action.payload };
            default:
                return state;
        }
    };

    const [state, counterDispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button
                title="Increase"
                onPress={() =>
                    counterDispatch({ type: "increase", payload: 1 })
                }
            />
            <Button
                title="Decrease"
                onPress={() =>
                    counterDispatch({ type: "decrease", payload: 1 })
                }
            />
            <Text>Current Count: {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
