import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  WebView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import css from '../../styles/styles';
import { COLOR_WHITE } from '../../styles/colors';

class WebBasic extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.title,
    };
  }

  onBack() {
    this.webview.goBack();
  }

  onForward() {
    this.webview.goForward();
  }

  onReload() {
    this.webview.reload();
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={css.flex}>
        <WebView
          ref={(ref) => { this.webview = ref; }}
          source={{ uri: params.uri }}
        />
        <View style={css.webNavBar}>
          <TouchableOpacity
            onPress={() => this.onBack()}
            style={css.webNavBarIcon}
          >
            <Icon
              name="chevron-left"
              color={COLOR_WHITE}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onReload()}
            style={css.webNavBarIcon}
          >
            <Icon
              name="refresh-cw"
              color={COLOR_WHITE}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onForward()}
            style={css.webNavBarIcon}
          >
            <Icon
              name="chevron-right"
              color={COLOR_WHITE}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

WebBasic.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        uri: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default WebBasic;
