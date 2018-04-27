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
    // ItemTells component
    if (this.props.varietyId) {
      const itemData = {
        itemId: this.props.itemId,
        varietyId: this.props.varietyId,
        name: this.props.itemData.name,
      };

      this.props.navigation.navigate(
        'ItemTells',
        {
          item: itemData,
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
    const itemName = String(this.props.itemData.name).toUpperCase();

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
            <Text style={css.itemListItemText}>{itemName}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

ItemSelectItem.defaultProps = {
  itemData: null,
  itemId: null,
  varietyId: null,
};

ItemSelectItem.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
  itemId: PropTypes.string,
  varietyId: PropTypes.string,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default ItemSelectItem;
