import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as colors from '../styles/colors';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LoadingSpinner</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  titleText: {
    color: colors.WHITE,
    fontSize: 30,
  },
});

export default Splash;