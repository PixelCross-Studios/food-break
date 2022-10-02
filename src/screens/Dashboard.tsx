import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Dashboard</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19323C',
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

export default Dashboard;