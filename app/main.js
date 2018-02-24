import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './views/Home';
import About from './views/About';
import SneakerSelect from './views/sneakers/SneakerSelect';
import SneakerInfo from './views/sneakers/SneakerInfo';
import BarcodeScanner from './views/scanner/BarcodeScanner';
import WebBasic from './views/utility/WebBasic';

import withNavigationPreventDuplicate from './util/withNavigationPreventDuplicate';

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

const Main = () => (<RootStack />);

export default Main;
