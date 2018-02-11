/*
  Master Stylsheet

  Section List
  ------------

  100 - Primary styles

  200 - Containers

  300 - Views
    301 - Home View

*/

import { StyleSheet } from 'react-native';

import {
  COLOR_WHITE,
} from './colors';

const css = StyleSheet.create({
  /*
   *  100 - Primary styles
   */
  flex: { flex: 1 },

  /*
   *  200 - Primary Containers
   */
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  /*
   *  300 - Views
   */

  // 301 - Home View
  sneakerSelectContainer: {
  },

  barcodeScanContainer: {

  },

  homeText: {
    color: COLOR_WHITE,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = css;
