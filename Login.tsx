import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

 
export default function Login(prop: any) {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('')
  const [hidePassword, setHidePassword] = React.useState(true);
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome to Partner for Life</Text>
      <TextInput style= {styles.emailInput}
      label="Email"
      value = {email}
      
      onChangeText = {(email) => setEmail(email)}
      
    />
    <TextInput style= {styles.passwordInput}
      label="Password"
      secureTextEntry = {hidePassword}
      value = {password}
      onChangeText = {(password) => setPassword(password)}
      right={<TextInput.Icon name="eye" onPress={()=>{
        setHidePassword(!hidePassword)
      }} />}
    />
    <Button style={styles.loginButton} icon="login" mode="contained" onPress={() => {
      Alert.alert('Email: ' + email + ' Password: ' + password);
      console.log('Email: ' + email + ' Password: ' + password);
    }}>
    Log In
  </Button>
    
    
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordInput:{
   height: 50,
   width: 350,
   marginVertical: 15
   
  },
 emailInput:{
    height: 50,
    width: 350,
    marginVertical: 15
    
   },
   loginButton: {
    marginVertical: 15
   },
   welcomeTitle: {
     position: 'relative',
     bottom: 90,
    marginBottom: 50,
     fontSize: 25
     
   }
});
