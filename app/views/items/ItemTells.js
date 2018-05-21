import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import ItemTellsItem from './ItemTellsItem';

import colors from '../../styles/colors';
import css from '../../styles/styles';

class ItemTells extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.item.name,
    };
  }

  componentDidMount() {
    const { varietyId } = this.props.navigation.state.params.item;
    this.props.getTells(varietyId);
  }

  getMappedTells() {
    const { item } = this.props.navigation.state.params;
    const { tells } = this.props;
    const mappedTells = [];
    Object.keys(tells[item.varietyId]).forEach((tellId) => {
      mappedTells.push({
        ...tells[item.varietyId][tellId],
        tellId,
        key: tellId,
      });
    });
    return mappedTells;
  }

  render() {
    const { item } = this.props.navigation.state.params;
    const { tellsStatus, tells } = this.props;
    let listData = [];

    if (tellsStatus) {
      listData = [];
    } else if (!tellsStatus && tells[item.varietyId]) {
      listData = this.getMappedTells();
    }

    return (
      <LinearGradient
        style={[css.flex, css.itemTellsListContainer]}
        colors={colors.tellsSelectGradient}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.2, y: 1 }}
        locations={[0, 0.6]}
      >
        <FlatList
          data={listData}
          renderItem={({ item: tell }) => (
            <ItemTellsItem
              tellData={tell}
              navigation={this.props.navigation}
            />
          )}
          contentContainerStyle={css.itemTellsList}
        />
      </LinearGradient>
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
    varietyId: PropTypes.shape({
      tellsId: PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        tellUrl: PropTypes.string,
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
    getTells: (varietyId) => {
      dispatch({ type: 'GET_TELLS', varietyId });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemTells);
