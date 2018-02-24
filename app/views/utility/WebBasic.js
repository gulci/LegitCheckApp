import React from 'react';
import {
  WebView,
} from 'react-native';

import css from '../../styles/styles';

class WebBasic extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.title,
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{ uri: params.uri }}
        style={css.flex}
      />
    );
  }
}

export default WebBasic;
