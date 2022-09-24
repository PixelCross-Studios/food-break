import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Settings</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25424F',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  titleText: {
    color: 'skyblue',
    fontSize: 30,
  },
});

export default Settings;