import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Button from './Button';
import * as colors from '../styles/colors';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter email"
      />
      <Button
        title="Send password reset"
        onPress={() => console.log('forgot password')}
        color={!email ? colors.GREY : colors.RED}
        customStyle={{ height: 40, marginTop: 20 }}
        disabled={!email}
      />
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  input: {
    backgroundColor: colors.WHITE,
    margin: 5,
    padding: 5,
    borderRadius: 8,
    width: '85%',
  }
});

export default ForgotPassword;
