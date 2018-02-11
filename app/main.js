import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './views/Home';
import About from './views/About';
import SneakerSelect from './views/sneakers/SneakerSelect';
import SneakerInfo from './views/sneakers/SneakerInfo';

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
  },
  {
    initialRouteName: 'Home',
  },
);

const Main = () => (<RootStack />);

export default Main;
