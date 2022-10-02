import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import * as colors from '../styles/colors';

const Splash = ({ dummySignin }) => {
  const [currentView, setCurrentView] = useState('signin');
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Food Break</Text>
      <Image source={require('../assets/fbLogo.png')} style={styles.logo}/> 
      <View style={styles.inputContainer}>
        {currentView === 'signin' && <SignIn dummySignin={dummySignin}/>}
        {currentView === 'signup' && <SignUp />}
        {currentView === 'forgotpassword' && <ForgotPassword />}
      </View>
      {currentView !== 'signin' && 
        <TouchableOpacity onPress={() => setCurrentView('signin')}>
          <Text style={styles.linkText}>Already have an account? Sign in</Text>
        </TouchableOpacity>
      }
      {currentView !== 'signup' && 
        <TouchableOpacity onPress={() => setCurrentView('signup')}>
          <Text style={styles.linkText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      }
      {currentView !== 'forgotpassword' && 
        <TouchableOpacity onPress={() => setCurrentView('forgotpassword')}>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </TouchableOpacity>
      }
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
    height: '30%',
  },
  titleText: {
    color: colors.WHITE,
    fontSize: 30,
    fontWeight: '700',
    marginTop: '10%',
  },
  logo: {
    resizeMode: 'contain',
    width: '10%',
    height: '10%',
    marginVertical: '5%',
  },
  linkText: {
    color: colors.RED,
    marginTop: '5%',
  },
});

export default Splash;