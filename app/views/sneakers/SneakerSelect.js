import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
} from 'react-native';

import SneakerSelectItem from './SneakerSelectItem';

import css from '../../styles/styles';

class SneakerSelect extends React.Component {
  static navigationOptions = {
    title: 'Sneaker Select',
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={css.flex}>
        <FlatList
          data={params.sneakerData}
          renderItem={({ item }) => (
            <SneakerSelectItem
              sneakerTitle={item.name}
              varieties={item.varieties}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    );
  }
}

SneakerSelect.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
        varieties: PropTypes.arrayOf(PropTypes.shape({
          key: PropTypes.string,
          name: PropTypes.string,
        })),
      }),
    }),
  }).isRequired,
};

export default SneakerSelect;
