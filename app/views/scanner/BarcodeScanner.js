import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { RNCamera } from 'react-native-camera';

import css from '../../styles/styles';
import { COLOR_WHITE } from '../../styles/colors';

class BarcodeScanner extends React.Component {
  static navigationOptions = ({ navigation }) => (
    {
      title: 'Barcode Scanner',
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate(
            'WebBasic',
            {
              title: 'Scanning Barcodes',
              uri: 'https://chdaniel.com/legit-check-app/barcode-scan/',
            },
          )}
        >
          <Icon
            name="help-circle"
            color={COLOR_WHITE}
            size={24}
            style={css.headerRightIcon}
          />
        </TouchableOpacity>
      ),
    }
  )

  constructor(props) {
    super(props);

    this.state = {
      torchOn: RNCamera.Constants.FlashMode.off,
      scannerActive: true,
    };
  }

  onBarcodeDetected = (barcode) => {
    if (this.state.scannerActive) {
      this.props.navigation.navigate(
        'WebBasic',
        {
          title: 'Barcode Results',
          uri: `https://www.google.com/search?q=${barcode.data}`,
        },
      );
    }
  }

  render() {
    return (
      <View style={css.flex}>
        <RNCamera
          style={css.barcodeScannerPreview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.torchOn}
          onBarCodeRead={this.onBarcodeDetected}
          permissionDialogTitle="Permission to use camera"
          permissionDialogMessage="We need to access your camera for scanning barcodes."
        />
      </View>
    );
  }
}

BarcodeScanner.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    addListener: PropTypes.func,
  }).isRequired,
};

export default BarcodeScanner;
