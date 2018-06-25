import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  WebView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import css from '../../styles/styles';
import { COLOR_WHITE } from '../../styles/colors';

class WebBasic extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.title,
      headerRight: navigation.getParam('rightHeaderButton'),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      isWebViewLoading: false,
    };
  }

  componentWillMount() {
    if (this.props.navigation.state.params.title.includes('Scan')) {
      const scanButtonComponent = (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('BarcodeScanner')}
        >
          <Text style={css.headerTextButtonRight}>
            Scan
          </Text>
        </TouchableOpacity>
      );

      this.props.navigation.setParams({ rightHeaderButton: scanButtonComponent });
    }
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

  changeLoadingState(isLoading) {
    this.setState({
      isWebViewLoading: isLoading,
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    const webviewStyle = [];

    return (
      <View style={css.flex}>
        {(this.state.isWebViewLoading) ? (
          <ActivityIndicator
            style={css.webLoading}
            size="large"
          />
        ) : (null)
        }
        <WebView
          style={webviewStyle}
          ref={(ref) => { this.webview = ref; }}
          source={{ uri: params.uri }}
          onLoadStart={() => this.changeLoadingState(true)}
          onLoadEnd={() => this.changeLoadingState(false)}
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
    navigate: PropTypes.func,
    setParams: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        title: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default WebBasic;
