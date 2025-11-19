import React, { useState } from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import CharacterScreen from "../screens/CharacterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [search, setSearch] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#00ff00",
        }}
      >
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image
                  source={require("../../assets/logorick.jpg")}
                  style={styles.logo}
                  resizeMode="contain"
                />
                
                <TextInput
                  placeholder="Buscar personagem..."
                  placeholderTextColor="#8f8"
                  value={search}
                  onChangeText={setSearch}
                  style={styles.searchInput}
                />
              </View>
            ),
            headerTitleAlign: "center",
            headerStyle: { height: 140, backgroundColor: "#000" },
          }}
        >
          {(props) => <HomeScreen {...props} search={search} />}
        </Stack.Screen>

        <Stack.Screen
          name="Character"
          component={CharacterScreen}
          options={{
            title: "Detalhes",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#00ff00",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 6,
  },

  logo: {
    width: 180,
    height: 60,
    marginBottom: 6,
  },

  searchInput: {
    width: "90%",
    height: 36,
    backgroundColor: "#111",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#00ff00",
    color: "#00ff00",
  },
});
