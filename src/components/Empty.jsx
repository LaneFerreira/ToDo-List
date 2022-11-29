import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Empty() {
  return (
    <View>
      <Text style={styles.title}>Sua lista de tasks está vazia!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        marginTop: 25,
    },
})