import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

import css from '../../styles/styles';

class ItemSelectItem extends React.Component {
  itemPress = () => {
    // Only navigate to additional select if
    // shoe has verieties. Otherwise load
    // item tells component
    if (this.props.variety) {
      this.props.navigation.navigate(
        'ItemTells',
        {
          variety: this.props.variety,
          item: this.props.itemData,
        },
      );
    } else if (this.props.itemId) {
      this.props.navigation.navigate(
        'ItemSelect',
        {
          itemId: this.props.itemId,
        },
      );
    }
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.itemPress}
      >
        <View style={css.itemListItem}>
          <View style={css.itemListItemImageContainer}>
            <Image
              style={css.itemListItemImage}
              source={{
                uri: this.props.itemData.imageUrl,
                cache: 'default',
              }}
            />
          </View>
          <View style={css.itemListItemTextContainer}>
            <Text style={css.itemListItemText}>{this.props.itemData.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

ItemSelectItem.defaultProps = {
  itemData: null,
  itemId: null,
  variety: null,
};

ItemSelectItem.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
  itemId: PropTypes.string,
  variety: PropTypes.string,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default ItemSelectItem;
