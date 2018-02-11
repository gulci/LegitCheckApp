import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import css from '../styles/styles';

class About extends React.Component {
  static navigationOptions = {
    title: 'About',
  }

  render() {
    return (
      <View style={css.flex}>
        <View style={css.mainContainer}>
          <Text style={css.aboutText}>
            Legit Check App
          </Text>
        </View>
      </View>
    );
  }
}

export default About;
