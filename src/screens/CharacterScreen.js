import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import api from "../services/api"; // usa axios (se você estiver usando fetch, ok também)

export default function CharacterScreen({ route }) {
  // aceita tanto { character } quanto { id }
  const { character: paramCharacter, id: paramId } = route.params || {};
  const [character, setCharacter] = useState(paramCharacter || null);
  const [loading, setLoading] = useState(!paramCharacter);
  const [error, setError] = useState(null);

  useEffect(() => {
    // log pra debug -> abra o Metro/console para ver
    console.log("CharacterScreen route.params:", route.params);

    // se já veio o objeto completo, não precisa buscar
    if (paramCharacter) {
      setCharacter(paramCharacter);
      setLoading(false);
      return;
    }

    // se veio somente id, busca na API
    if (paramId) {
      (async () => {
        try {
          setLoading(true);
          setError(null);

          // se você usa axios (api), usa: api.get(`/character/${paramId}`)
          // se não, usa fetch como antes
          const res = await api.get(`/character/${paramId}`);
          const data = res.data;
          console.log("Character fetched:", data);
          setCharacter(data);
        } catch (err) {
          console.error("Error fetching character:", err);
          setError("Não foi possível carregar os detalhes. Tente novamente.");
          // opcional: alert para o usuário
          // Alert.alert("Erro", "Não foi possível carregar os detalhes do personagem.");
        } finally {
          setLoading(false);
        }
      })();
      return;
    }

    // se nenhum parâmetro enviado
    setError("Parâmetros da rota inválidos (id ou character).");
    setLoading(false);
  }, [paramCharacter, paramId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#66fcf1" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Personagem não encontrado.</Text>
      </View>
    );
  }

  // usa uma URL válida ou fallback local
  const imageUri = character.image && typeof character.image === "string" ? { uri: character.image } : placeholder;

  return (
    <View style={styles.container}>
      <Image
        source={imageUri}
        style={styles.image}
        // onError para debug quando imagem não carregar
        onError={(e) => {
          console.warn("Image onError:", e.nativeEvent);
        }}
      />

      <Text style={styles.name}>{character.name ?? "Nome desconhecido"}</Text>

      <Text style={styles.info}>Status: {character.status ?? "Desconhecido"}</Text>
      <Text style={styles.info}>Espécie: {character.species ?? "Desconhecida"}</Text>
      <Text style={styles.info}>Gênero: {character.gender ?? "Desconhecido"}</Text>

      <Text style={styles.info}>
        Origem: {character.origin?.name ?? "Desconhecida"}
      </Text>

      <Text style={styles.info}>
        Local atual: {character.location?.name ?? "Desconhecido"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#0b0c10",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0b0c10",
    padding: 20,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#45a29e",
    backgroundColor: "#000", // evita cor inesperada por baixo
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#66fcf1",
    marginBottom: 12,
  },
  info: {
    fontSize: 18,
    color: "#c5c6c7",
    marginBottom: 8,
  },
  errorText: {
    color: "#ff6b6b",
    fontSize: 16,
    textAlign: "center",
  },
});
