import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as colors from '../styles/colors';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Dashboard</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  titleText: {
    color: colors.WHITE,
    fontSize: 30,
  },
});

export default Dashboard;