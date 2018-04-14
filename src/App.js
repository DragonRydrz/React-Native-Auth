import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqq9ACu2Eoc8ucw0i8Ve_eKk-I3eCSPaE',
      authDomain: 'authentication-108b2.firebaseapp.com',
      databaseURL: 'https://authentication-108b2.firebaseio.com',
      projectId: 'authentication-108b2',
      storageBucket: 'authentication-108b2.appspot.com',
      messagingSenderId: '265990007912',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
