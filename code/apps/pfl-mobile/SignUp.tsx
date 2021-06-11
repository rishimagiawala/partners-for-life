import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
const logo = require("./assets/logo.png");
export default function SignUp(props: any) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);
  const [name, setName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [checkErrors, setCheckErrors] = React.useState(false);
 

  var passwordErrors = true;
  var emailErrors = true;

  const emailHasErrors = () => {
    if (checkErrors) {
      if (!(email.includes("@") && email.includes("."))) {
        emailErrors = true;
        return (
          <HelperText style={styles.helperText} type="error">
            Email address is invalid!
          </HelperText>
        );
        
      }
      else{
        emailErrors = false
      }
    }
  };

  const passwordHasErrors = () => {
    var passwordReq = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (checkErrors) {
      if (!(password == confirmPassword)) {
        passwordErrors = true
        return (
          <HelperText style={styles.helperText} type="error">
            Passwords do not match
          </HelperText>
        );
      }
      else if(!(password.match(passwordReq))){
        passwordErrors = true
        return(
        <HelperText style={styles.helperText} type="error">
        Password must be have at least 6 characters, one numeric digit, one uppercase and one lowercase letter
      </HelperText>
        );
      }
      else{
        passwordErrors = false
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.titleText}>Create your Account</Text>
      <TextInput
        theme={{ colors: { primary: "#118ab2" } }}
        selectionColor="#118ab2"
        outlineColor="#118ab2"
        underlineColor="#118ab2"
        style={styles.nameInput}
        label="Name"
        value={name}
        onChangeText={(name) => setName(name)}
      />

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
      {emailHasErrors()}
      <TextInput
        theme={{ colors: { primary: "#118ab2" } }}
        selectionColor="#118ab2"
        outlineColor="#118ab2"
        underlineColor="#118ab2"
        style={styles.passwordInput}
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        theme={{ colors: { primary: "#118ab2" } }}
        selectionColor="#118ab2"
        outlineColor="#118ab2"
        underlineColor="#118ab2"
        style={styles.passwordInput}
        label="Confirm Password"
        secureTextEntry={hidePassword}
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        right={
          <TextInput.Icon
            name="eye"
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          />
        }
      />
      {passwordHasErrors()}

      <Button
        dark={true}
        onPress={() => {
          setCheckErrors(true);
          if(!(passwordErrors || emailErrors)){
            console.log("Everything looks good")
            console.log('PasswordError: ' + passwordErrors + '/EmailErrors: ' + emailErrors)
            Alert.alert('Thanks for signing up ' + name, 'Password: ' + password + '\nEmail: ' + email )
          }
          else{
            console.log("Something is wrong now")
            console.log('PasswordError: ' + passwordErrors + '/EmailErrors: ' + emailErrors)
          }
        }}
        color="#06d6a0"
        style={styles.signUpButton}
        icon="account-plus-outline"
        mode="contained"
      >
        Sign Up
      </Button>

      <Text
        onPress={() => {
          props.navigation.navigate("Login");
        }}
        style={styles.loginInstead}
      >
        Already Have an Account?
      </Text>
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
  nameInput: {
    height: 50,
    width: 350,
    marginVertical: 15,
    color: "#118ab2",
  },
  signUpButton: {
    marginVertical: 15,
    marginTop: 30,
    width: 350,
    borderRadius: 20,
  },
  logo: {
    position: "relative",
    bottom: 30,
    height: 210,
    width: 210,
  },
  titleText: {
    color: "#073b4c",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    width: 350,
  },
  loginInstead: {
    color: "#118ab2",
    fontWeight: "bold",
    fontSize: 15,
  },
  helperText: {
    position: "relative",
    bottom: 10,
    width: 350,
  },
});
