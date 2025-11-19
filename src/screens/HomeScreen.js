import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import api from "../services/api";

export default function HomeScreen({ navigation, search }) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Buscar personagens
  const fetchCharacters = async (reset = false) => {
    if (loading || (!hasMore && !reset)) return;

    setLoading(true);
    const nextPage = reset ? 1 : page;

    try {
      const res = await api.get(`/character/?page=${nextPage}&name=${search}`);
      const data = res.data;

      if (reset) {
        setCharacters(data.results);
        setPage(2);
        setHasMore(data.info.next !== null);
      } else {
        setCharacters((prev) => [...prev, ...data.results]);
        setPage(nextPage + 1);
        setHasMore(data.info.next !== null);
      }
    } catch (err) {
      if (reset) setCharacters([]);
      setHasMore(false);
    }

    setLoading(false);
  };

  // Carregar ao abrir
  useEffect(() => {
    fetchCharacters(true);
  }, []);

  // Atualizar ao pesquisar
  useEffect(() => {
    fetchCharacters(true);
  }, [search]);

  return (
    <View style={styles.container}>

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Character", { id: item.id })}
          >
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        onEndReached={() => fetchCharacters(false)}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color="#00ff00" style={{ margin: 20 }} />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // fundo preto
    paddingTop: 10,
  },
  logo: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#00ff00", // verde neon
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
  },
  name: {
    color: "#00ff00",
    fontSize: 18,
    fontWeight: "600",
    flexShrink: 1,
  },
});
