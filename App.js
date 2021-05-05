// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Pages/Components/Header';

export default function App() {
  return (
    <>
    <Header title="Cabeçalho" />
    <View style={styles.container}>
      <Text>Melhor turma da noite</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
