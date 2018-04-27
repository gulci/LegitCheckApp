import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import css from '../../styles/styles';

class ItemTells extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.item.name,
    };
  }

  componentDidMount() {
    const { itemId, varietyId } = this.props.navigation.state.params.item;
    this.props.getTells(itemId, varietyId);
  }

  render() {
    const { item } = this.props.navigation.state.params;
    if (!this.props.tellsStatus && this.props.tells[item.itemId]) {
      const tells = this.props.tells[item.itemId][item.varietyId];
      console.log(tells);
    }
    return (
      <View style={css.flex}>
        <View style={css.mainContainer} onLayout={this.setImageSize}>
          <Text style={css.aboutText}>
            Legit Check Info
          </Text>
        </View>
      </View>
    );
  }
}

ItemTells.defaultProps = {
  tells: null,
  tellsStatus: null,
};

ItemTells.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.object,
    }),
  }).isRequired,
  tellsStatus: PropTypes.shape({
    timeRequested: PropTypes.object,
  }),
  tells: PropTypes.shape({
    itemId: PropTypes.shape({
      varietyId: PropTypes.shape({
        tellsId: PropTypes.shape({
          imageUrl: PropTypes.string,
          name: PropTypes.string,
          tellUrl: PropTypes.string,
        }),
      }),
    }),
  }),
  getTells: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    tells: state.guides.tells,
    tellsStatus: state.requestStatuses.GET_TELLS,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getTells: (itemId, varietyId) => {
      dispatch({ type: 'GET_TELLS', itemId, varietyId });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemTells);
