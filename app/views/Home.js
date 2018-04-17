import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import css from '../styles/styles';
import {
  sneakerSelectGradient,
  barcodeScanGradient,
} from '../styles/colors';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
    ),
  })

  componentDidMount() {
    this.props.getGuides();
  }

  render() {
    return (
      <View style={css.flex}>
        <LinearGradient
          style={css.mainContainer}
          colors={sneakerSelectGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
        >
          <Button
            title="Select Your Sneaker"
            onPress={() => this.props.navigation.navigate(
              'SneakerSelect',
              {
                sneakerData: this.props.guides.items,
              },
            )}
          />
        </LinearGradient>
        <LinearGradient
          style={css.mainContainer}
          colors={barcodeScanGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
        >
          <Button
            title="Scan Barcode"
            onPress={() => this.props.navigation.navigate('BarcodeScanner')}
          />
        </LinearGradient>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  guides: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      varieties: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })),
    })),
  }).isRequired,
  getGuides: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    guides: state.guides,
    requestStatus: state.requestStatuses.GET_GUIDES,
    requestError: state.requestErrors.GET_GUIDES,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getGuides: () => {
      dispatch({ type: 'GET_GUIDES' });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
