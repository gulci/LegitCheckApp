import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

import { COLOR_TRANSPARENT } from '../../styles/colors';
import css from '../../styles/styles';

class ItemSelectItem extends React.Component {
  openUrl(name, url) {
    this.props.navigation.navigate(
      'WebBasic',
      {
        title: name,
        uri: url,
      },
    );
  }

  render() {
    const { name, tellUrl, imageUrl } = this.props.tellData;
    return (
      <TouchableHighlight
        style={css.itemTellsItemContainer}
        underlayColor={COLOR_TRANSPARENT}
        onPress={() => { this.openUrl(name, tellUrl); }}
      >
        <View style={css.itemTellsItem}>
          <View style={css.itemTellsItemImageContainer}>
            <Image
              style={css.itemTellsItemImage}
              source={{
                uri: imageUrl,
                cache: 'default',
              }}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

ItemSelectItem.propTypes = {
  tellData: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    key: PropTypes.string,
    tellId: PropTypes.string,
    tellUrl: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default ItemSelectItem;
