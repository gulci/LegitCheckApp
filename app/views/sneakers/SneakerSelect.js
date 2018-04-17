import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import SneakerSelectItem from './SneakerSelectItem';

import css from '../../styles/styles';

class SneakerSelect extends React.Component {
  static navigationOptions = {
    title: 'Item Select',
  }

  render() {
    const { params } = this.props.navigation.state;

    if (this.props.requestStatus) {
      return null;
    }

    return (
      <View style={[css.flex, css.sneakerSelectListContainer]}>
        <FlatList
          data={params.sneakerData}
          keyExtractor={(item, index) => (
            index.toString()
          )}
          renderItem={({ item }) => (
            <SneakerSelectItem
              sneakerData={item}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    );
  }
}

SneakerSelect.defaultProps = {
  requestStatus: null,
};

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
  requestStatus: PropTypes.shape({
    timeRequested: PropTypes.object,
  }),
};

const mapStateToProps = state => (
  {
    requestStatus: state.requestStatuses.GET_GUIDES,
    requestError: state.requestErrors.GET_GUIDES,
  }
);

export default connect(mapStateToProps)(SneakerSelect);
