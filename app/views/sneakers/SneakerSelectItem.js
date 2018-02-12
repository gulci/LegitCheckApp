import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

import css from '../../styles/styles';

class SneakerSelectItem extends React.Component {
  itemPress = () => {
    // Only navigate to additional select if
    // shoe has verieties. Otherwise load
    // sneaker info component
    if (this.props.sneakerData.varieties) {
      this.props.navigation.navigate(
        'SneakerSelect',
        {
          sneakerData: this.props.sneakerData.varieties,
        },
      );
    } else {
      this.props.navigation.navigate(
        'SneakerInfo',
        {
          sneaker: this.props.sneakerData,
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
          <View style={css.sneakerItemImageContainer}>
            <Image
              style={css.sneakerItemImage}
              source={{
                uri: this.props.sneakerData.imageUrl,
                cache: 'default',
              }}
            />
          </View>
          <View style={css.sneakerItemTextContainer}>
            <Text style={css.sneakerItemText}>{this.props.sneakerData.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

SneakerSelectItem.propTypes = {
  sneakerData: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    varieties: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
  }).isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default SneakerSelectItem;
