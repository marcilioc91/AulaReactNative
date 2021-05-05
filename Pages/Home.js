import React from 'react'
import { View, Text,  StyleSheet} from 'react-native'
import Header from './components/Header'; 

const Home = () => {
    return (
        <>
          <Header title="INÍCIO"/>
          <View style={styles.container}>
            <Text style={styles.textTitle}>Welcome to Homepage!!!</Text>
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
    textTitle: {
      fontSize: 30, 
      fontWeight: 'bold', 
      color: 'black'
  
  },
});

export default Home