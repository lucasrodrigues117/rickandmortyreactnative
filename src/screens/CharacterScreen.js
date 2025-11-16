import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CharacterScreen({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />

      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Status: {character.status}</Text>
      <Text style={styles.info}>Espécie: {character.species}</Text>
      <Text style={styles.info}>Origem: {character.origin.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  image: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  name: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  info: { fontSize: 18, marginBottom: 5 },
});
