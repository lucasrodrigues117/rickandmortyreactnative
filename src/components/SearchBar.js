import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function SearchBar({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar personagem..."
        placeholderTextColor="#66ff66"
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "#111",
    color: "#00ff00",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#00ff00",
  },
});
