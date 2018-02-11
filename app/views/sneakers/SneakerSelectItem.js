import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

import css from '../../styles/styles';

class SneakerSelectItem extends React.Component {
  static defaultProps = {
    varieties: null,
  }

  itemPress = () => {
    // Only navigate to additional select if
    // shoe has verieties. Otherwise load
    // sneaker info component
    if (this.props.varieties) {
      this.props.navigation.navigate(
        'SneakerSelect',
        {
          sneakerData: this.props.varieties,
        },
      );
    } else {
      this.props.navigation.navigate(
        'SneakerInfo',
        {
          sneaker: this.props.sneakerTitle,
        },
      );
    }
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.itemPress}
      >
        <View style={css.sneakerItem}>
          <Text style={css.sneakerItemText}>{this.props.sneakerTitle}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

SneakerSelectItem.propTypes = {
  sneakerTitle: PropTypes.string.isRequired,
  varieties: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
  })),
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default SneakerSelectItem;
