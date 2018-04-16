// importing react and react native modules
import React, { Component } from 'react';
import { Alert, ImageBackground, View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';

// Importing Google oAuth Moudles
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const win = Dimensions.get('window');

const text = 57;

export default class Login extends Component {
  componentDidMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      // play services are available. can now configure library
    })
      .catch((err) => {
        console.log('Play services error', err.code, err.message);
      });

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      // iosClientId: <FROM DEVELOPER CONSOLE>, // only for iOS
      webClientId: '506789965790-hp7rporgtm41f2sinb544a8sa5a4sd0t.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '' // specifies a hosted domain restriction
      // forceConsentPrompt: true // [Android] if you want to show the authorization prompt at each login
      // accountName: '' // [Android] specifies an account name on the device that should be used
    })
      .then(() => {
        // you can now call currentUserAsync()
      });
  }

  _signIn() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({ user });
      })
      .catch((err) => {
        Alert.aler('error sign in');
      })
      .done();
  }

  render() {
    return (
      <ImageBackground source={require('./../../images/background.jpg')} style={styles.backgroundImageContainer}>
        <ScrollView style={styles.scrollContainer}>

          <View style={styles.logoAndTitleContainer}>
            <View style={styles.logoContainer}>
              <Image source={require('./../../images/logo.png')} style={styles.logo} />
              <Text style={styles.leftTagLine}>Seeing is Believing</Text>
              <Text style={styles.titleText}>Rapid Prototyping</Text>
            </View>

            <View>
              <Text style={styles.rightTagLine}>Concept to Reality</Text>
            </View>
          </View>


          <View style={{ justifyContent: 'center' }}>
            <View style={styles.loginContainer}>
              <TextInput style={styles.inputText} underlineColorAndroid="#7c1265" placeholder="Username" placeholderTextColor="#7c1265" />
              <TextInput style={styles.inputText} secureTextEntry underlineColorAndroid="#7c1265" placeholder="Password" placeholderTextColor="#7c1265" />
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}><Text style={styles.buttonText}>Sign Me In</Text></TouchableOpacity>
            </View>
          </View>

          <View style={styles.googleButtonContainer}>
            <GoogleSigninButton
              style={{ width: 48, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={this._signIn.bind(this)}
            />
            <Text style={styles.googleButtonText}>SignUp with Google</Text>
          </View>

        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    height: '100%',
    width: '100%',
  },
  logoAndTitleContainer: {
    flex: 1,
    height: (win.height / 3) + 50,
  },
  scrollContainer: {
    flex: 1,
  },
  logo: {
    height: 200,
    width: 220,
    flex: 1,
    marginTop: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  leftTagLine: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginRight: 140,
  },
  rightTagLine: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginLeft: 140,
  },
  loginContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 15,
    flex: 1,
    justifyContent: 'center',
  },
  inputText: {
    height: 40,
    fontSize: 18,
    color: '#7c1265',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#a5154a',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  googleButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
  },
  googleButtonText: {
    padding: 0,
    color: 'white',
    fontSize: 16,
  },
  googleButton: {
    marginTop: 0,
  },
});
