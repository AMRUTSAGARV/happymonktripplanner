import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import axios from 'axios';

const Login = ({  navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('https://bbf5-2406-b400-a9-4c0a-488e-e807-ecae-2070.ngrok-free.app/signin', {
        email,
        password,
      })
      .then(response => {
        console.log('Login successful', response.data);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error('Login failed', error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email} 
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button}   onPress={() => {
        handleLogin();
      }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.toggleText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 70,
    // backgroundColor: 'red',

    // Background color
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'white', 
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  toggleText: {
    marginTop: 20,
    color: '#007AFF', 
    fontSize: 16,
  },
});

export default Login;
