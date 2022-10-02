import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import * as colors from '../styles/colors';

const Settings = ({ dummySignout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Settings</Text>
      <Button
        title="Sign out"
        color={colors.RED}
        onPress={dummySignout}
        customStyle={{width: '50%', marginTop: 150}}
        disabled={false}/>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
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

export default Settings;