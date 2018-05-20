import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';

import Home from './views/Home';
import About from './views/About';
import ItemSelect from './views/items/ItemSelect';
import ItemTells from './views/items/ItemTells';
import BarcodeScanner from './views/scanner/BarcodeScanner';
import WebBasic from './views/utility/WebBasic';

import { navigationHeader } from './styles/styles';

import {
  COLOR_WHITE,
  COLOR_BLACK,
} from './styles/colors';

// Temporary fix for react-native bug, to be fixed in next release
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader requires',
]);

// Store setup
const { store, persistor } = configureStore();

// Navigation
const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    ItemSelect: {
      screen: ItemSelect,
    },
    About: {
      screen: About,
    },
    ItemTells: {
      screen: ItemTells,
    },
    BarcodeScanner: {
      screen: BarcodeScanner,
    },
    WebBasic: {
      screen: WebBasic,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: navigationHeader,
      headerTintColor: COLOR_WHITE,
    },
  },
);

const Main = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar
        backgroundColor={COLOR_BLACK}
        barStyle="light-content"
      />
      <RootStack />
    </PersistGate>
  </Provider>
);

export default Main;
