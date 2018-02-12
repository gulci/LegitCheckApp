import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import css from '../../styles/styles';

class SneakerInfo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.sneaker.name,
    };
  }

  render() {
    return (
      <View style={css.flex}>
        <View style={css.mainContainer} onLayout={this.setImageSize}>
          <Text style={css.aboutText}>
            Legit Check Info
          </Text>
        </View>
      </View>
    );
  }
}

export default SneakerInfo;
