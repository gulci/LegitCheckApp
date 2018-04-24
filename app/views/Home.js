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
  itemSelectGradient,
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
    this.props.getItems();
  }

  render() {
    return (
      <View style={css.flex}>
        <LinearGradient
          style={css.mainContainer}
          colors={itemSelectGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
        >
          <Button
            title="Select Your Item"
            onPress={() => this.props.navigation.navigate(
              'ItemSelect',
              {
                itemData: this.props.guides.items,
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
      imageUrl: PropTypes.string,
    })),
  }).isRequired,
  getItems: PropTypes.func.isRequired,
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
    getItems: () => {
      dispatch({ type: 'GET_ITEMS' });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
