import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null,
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqq9ACu2Eoc8ucw0i8Ve_eKk-I3eCSPaE',
      authDomain: 'authentication-108b2.firebaseapp.com',
      databaseURL: 'https://authentication-108b2.firebaseio.com',
      projectId: 'authentication-108b2',
      storageBucket: 'authentication-108b2.appspot.com',
      messagingSenderId: '265990007912',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ marginTop: '50%' }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
