import React from 'react';
import { StackNavigator } from 'react-navigation';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';

import Home from './views/Home';
import About from './views/About';
import SneakerSelect from './views/sneakers/SneakerSelect';
import SneakerInfo from './views/sneakers/SneakerInfo';
import BarcodeScanner from './views/scanner/BarcodeScanner';
import WebBasic from './views/utility/WebBasic';

import withNavigationPreventDuplicate from './util/withNavigationPreventDuplicate';

// Store setup
const { store, persistor } = configureStore();

// Navigation
const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    SneakerSelect: {
      screen: SneakerSelect,
    },
    About: {
      screen: About,
    },
    SneakerInfo: {
      screen: SneakerInfo,
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
  },
);

RootStack.router.getStateForAction =
withNavigationPreventDuplicate(RootStack.router.getStateForAction);

const Main = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootStack />
    </PersistGate>
  </Provider>
);

export default Main;
