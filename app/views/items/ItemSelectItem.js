import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

import colors from '../../styles/colors';
import css from '../../styles/styles';

class ItemSelectItem extends React.Component {
  itemPress = () => {
    // Only navigate to additional select if
    // shoe has verieties. Otherwise load
    // ItemTells component
    if (this.props.varietyId) {
      const itemData = {
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
      this.props.navigation.navigate({
        routeName: 'ItemSelect',
        params: {
          itemId: this.props.itemId,
          itemName: this.props.itemData.name,
        },
        key: this.props.itemId,
      });
    }
  }

  render() {
    const itemName = String(this.props.itemData.name).toUpperCase();
    const itemListItemBackgroundStyle = (!this.props.varietyId) ?
      ({ backgroundColor: colors.COLOR_BLACK_30 }) : (null);

    return (
      <TouchableHighlight
        onPress={this.itemPress}
        activeOpacity={0.3}
        underlayColor={colors.COLOR_WHITE}
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
          <View
            style={[
              css.itemListItemTextContainer,
              (!this.props.varietyId) ?
              (itemListItemBackgroundStyle) :
              (null),
            ]}
          >
            <Text
              style={[
                css.itemListItemText,
                (this.props.varietyId) ?
                (css.itemListVarietyText) : (null),
              ]}
            >
              {itemName}
            </Text>
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
