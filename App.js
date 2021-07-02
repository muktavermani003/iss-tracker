import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import IssLocationScreen from "./screens/IssLocationScreen"

export default function App() {
  return (
    <View style={styles.container}>
     <HomeScreen/>
     <IssLocationScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


