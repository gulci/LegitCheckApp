/*
  Master Stylsheet

  Section List
  ------------

  100 - Primary styles

  200 - Containers

  300 - Views
    301 - Home View
    302 - About View
    303 - Item Select View
    304 - Scanner View

*/

import { StyleSheet } from 'react-native';

import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_BLACK_30,
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

  // 302 - About View
  aboutText: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },

  // 303 - Item Select View
  itemSelectListContainer: {
    backgroundColor: COLOR_BLACK,
  },
  itemListItem: {
    height: 200,
  },
  itemListItemImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  itemListItemImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  itemListItemTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLOR_BLACK_30,
  },
  itemListItemText: {
    color: COLOR_WHITE,
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'flex-end',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  // 304 Scanner View
  barcodeScannerPreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

module.exports = css;
