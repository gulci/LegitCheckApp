import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './views/Home';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Main = () => (<RootStack />);

export default Main;
