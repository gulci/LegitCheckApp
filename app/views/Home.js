import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import css from '../styles/styles';
import {
  sneakerSelectGradient,
  barcodeScanGradient,
} from '../styles/colors';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View style={css.flex}>
        <LinearGradient
          style={css.mainContainer}
          colors={sneakerSelectGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 2]}
        >
          <Text style={css.homeText}>
            Select Your Sneaker
          </Text>
        </LinearGradient>
        <LinearGradient
          style={css.mainContainer}
          colors={barcodeScanGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[-2, 1]}
        >
          <Text style={css.homeText}>
            Scan barcode
          </Text>
        </LinearGradient>
      </View>
    );
  }
}

export default Home;
