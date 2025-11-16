import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Rick and Morty" }}
        />
        <Stack.Screen 
          name="Character" 
          component={CharacterScreen} 
          options={{ title: "Detalhes do Personagem" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
