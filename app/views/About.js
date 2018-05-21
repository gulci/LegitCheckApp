import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import css from '../styles/styles';
import { COLOR_WHITE, aboutGradient } from '../styles/colors';

class About extends React.Component {
  static navigationOptions = {
    title: 'About',
  }

  render() {
    return (
      <LinearGradient
        style={[css.flex, css.itemTellsListContainer]}
        colors={aboutGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 1.3]}
      >
        <View style={css.mainContainer}>
          <Text style={css.aboutLargeText}>
            Legit Check App
          </Text>
          <Text style={css.aboutSmallText}>
            Coded with
          </Text>
          <Icon
            name="heart"
            color={COLOR_WHITE}
            size={24}
            style={css.aboutIcon}
          />
          <Text style={css.aboutSmallText}>
            by Gulci
          </Text>
        </View>
      </LinearGradient>
    );
  }
}

export default About;
