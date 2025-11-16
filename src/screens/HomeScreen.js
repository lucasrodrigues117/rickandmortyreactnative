import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import api from "../services/api";

export default function HomeScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get("/character")
      .then(response => setCharacters(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate("Character", { character: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { marginBottom: 16, flexDirection: "row", alignItems: "center" },
  image: { width: 60, height: 60, borderRadius: 30 },
  name: { marginLeft: 12, fontSize: 18, fontWeight: "bold" },
});
