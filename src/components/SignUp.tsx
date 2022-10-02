import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Button from './Button';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter password"
      />
      <Button
        title="Sign up"
        onPress={console.log('sign up')}
        color={'#af0b0f'}
        customStyle={{ height: 40, marginTop: 20 }}
      />
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19323C',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  input: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 5,
    borderRadius: 8,
    width: '85%',
  }
});

export default SignUp;
