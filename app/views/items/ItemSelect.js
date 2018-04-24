import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import ItemSelectItem from './ItemSelectItem';

import css from '../../styles/styles';

class ItemSelect extends React.Component {
  static navigationOptions = {
    title: 'Item Select',
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    if (params.itemId) {
      this.props.getVarieties(params.itemId);
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    let listData;

    if (!params.itemId) {
      if (!this.props.itemsStatus) {
        // Items have loaded, set data
        listData = params.itemData;
      } else {
        return null;
      }
    } else if (!this.props.varietiesStatus) {
      // Varities have loaded, set data
      listData = this.props.varieties;
    } else {
      // Varieties are loading
      return null;
    }

    return (
      <View style={[css.flex, css.itemSelectListContainer]}>
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <ItemSelectItem
              itemData={item}
              itemId={item.key}
              variety={params.itemId}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    );
  }
}

ItemSelect.defaultProps = {
  varieties: null,
  itemsStatus: null,
  varietiesStatus: null,
};

ItemSelect.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.object,
    }),
  }).isRequired,
  itemsStatus: PropTypes.shape({
    timeRequested: PropTypes.object,
  }),
  varieties: PropTypes.arrayOf(PropTypes.object),
  varietiesStatus: PropTypes.shape({
    timeRequested: PropTypes.object,
  }),
  getVarieties: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    varieties: state.guides.varieties,
    itemsStatus: state.requestStatuses.GET_ITEMS,
    varietiesStatus: state.requestStatuses.GET_VARIETIES,
    itemsError: state.requestErrors.GET_ITEMS,
    varietiesError: state.requestErrors.GET_VARIETIES,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getVarieties: (id) => {
      dispatch({ type: 'GET_VARIETIES', id });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemSelect);
