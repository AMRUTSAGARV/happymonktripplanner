import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      if (!name || !email || !password) {
        Alert.alert('Please fill in all fields');
      }
  
      const response = await axios.post('https://bbf5-2406-b400-a9-4c0a-488e-e807-ecae-2070.ngrok-free.app/signup', {
        name,
        email,
        password,
      });
  
      console.log('Registration successful', response.data);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration failed', error.message);
      Alert.alert('Registration Error', error.message);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.headerText}>Register</Text>
    <TextInput
      style={styles.input}
      placeholder="Name"
      onChangeText={text => setName(text)}
      value={name}
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={text => setEmail(text)}
      value={email}
      keyboardType="email-address"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      onChangeText={text => setPassword(text)}
      value={password}
      secureTextEntry
    />
    <TouchableOpacity style={styles.button} onPress={() => {
        handleRegister();
      }}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.toggleText}>Already have an account? Login</Text>
      </TouchableOpacity>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    toggleText: {
      marginTop: 10,
      color: 'blue',
    },
  });

export default Register;
