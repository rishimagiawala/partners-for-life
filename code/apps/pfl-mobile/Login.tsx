import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { lightBlue100 } from "react-native-paper/lib/typescript/styles/colors";
const logo = require("./assets/logo.png");
export default function Login(props: any) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);

  ///////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.titleText}>Login to your Account</Text>
      <TextInput
        theme={{ colors: { primary: "#118ab2" } }}
        selectionColor="#118ab2"
        outlineColor="#118ab2"
        underlineColor="#118ab2"
        style={styles.emailInput}
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        theme={{ colors: { primary: "#118ab2" } }}
        selectionColor="#118ab2"
        outlineColor="#118ab2"
        underlineColor="#118ab2"
        style={styles.passwordInput}
        label="Password"
        secureTextEntry={hidePassword}
        value={password}
        onChangeText={(password) => setPassword(password)}
        right={
          <TextInput.Icon
            name="eye"
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          />
        }
      />
      <Button
        color="#118ab2"
        style={styles.loginButton}
        icon="login"
        mode="contained"
        onPress={() => {
          console.log("Email: " + email + " Password: " + password);
          const Http = new XMLHttpRequest();
          const url = "http://192.168.1.26:8000/";
          Http.open("POST", url);
          Http.setRequestHeader("Content-Type", "application/json");
          Http.send(
            JSON.stringify({
              login: {
                email: email,
                password: password,
              },
            })
          );

          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
          };
        }}
      >
        Log In
      </Button>

      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Button
        dark={true}
        color="#06d6a0"
        style={styles.signUpButton}
        icon="account-plus-outline"
        mode="contained"
        onPress={()=>{
          props.navigation.navigate("SignUp");
        }}
      >
        Sign Up
      </Button>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
  },
  passwordInput: {
    height: 50,
    width: 350,
    marginVertical: 15,
  },
  emailInput: {
    height: 50,
    width: 350,
    marginVertical: 15,
    color: "#118ab2",
  },
  loginButton: {
    marginVertical: 15,
    width: 350,
    borderRadius: 20,
  },
  signUpButton: {
    marginTop: 30,
    width: 350,
    borderRadius: 20,
  },
  
  forgotPassword: {
    color: "#118ab2",
    fontWeight: "bold",
    fontSize: 15,
  },
  logo:{
    position:'relative',
    bottom: 30,
    height: 210,
    width: 210,
  },
  titleText:{
    
    color: "#073b4c",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'left',
    width: 350,
    
  }
});
