import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MainNav from './src/navigation/MainNav';
import Splash from './src/screens/Splash';
import LoadingSpinner from './src/components/LoadingSpinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ?
        <LoadingSpinner />
        : isLoggedIn ?
          <MainNav />
          :
          <Splash dummySignin={() => setIsLoggedIn(true)}/>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25424F',
    height: '100%',
    width: '100%',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
