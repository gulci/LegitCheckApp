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
        end={{ x: 0.3, y: 1.2 }}
        locations={[0, 1.3]}
      >
        <View style={css.mainContainer}>
          <Text style={css.aboutLargeText}>
            Legit Check App
          </Text>
          <View style={css.aboutSubsection}>
            <Text style={css.aboutSmallText}>
              Content created with
            </Text>
            <Icon
              name="heart"
              color={COLOR_WHITE}
              size={24}
              style={css.aboutIcon}
            />
            <Text style={css.aboutSmallText}>
              by Ch Daniel
            </Text>
            <Text style={css.aboutSmallText}>
              hello@chdaniel.com
            </Text>
          </View>
          <View style={css.aboutSubsection}>
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
            <Text style={css.aboutSmallText}>
              gulci@riseup.net
            </Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

export default About;
