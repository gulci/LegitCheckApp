/*
  Master Stylsheet

  Section List
  ------------

  100 - Primary styles

  200 - Containers

  300 - Views
    301 - Home View
    302 - About View
    303 - Items View
    304 - Tells View
    305 - Scanner View
*/

import { StyleSheet } from 'react-native';

import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_GRAY,
  COLOR_TRANSPARENT,
  COLOR_BLACK_40,
} from './colors';

const css = StyleSheet.create({
  /*
   *  100 - Primary styles
   */
  flex: { flex: 1 },

  // Navigation
  navigationHeader: {
    backgroundColor: COLOR_BLACK,
  },

  headerRightIcon: {
    paddingRight: 8,
  },

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

  // 303 - Items View
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

  itemListVarietyText: {
    color: COLOR_GRAY,
    fontWeight: '300',
  },

  // 304 Tells View
  itemTellsListContainer: {
    backgroundColor: COLOR_BLACK,
  },

  itemTellsList: {
    paddingTop: 16,
    paddingBottom: 16,
  },

  itemTellsItemContainer: {
    height: 80,
    margin: 16,
    backgroundColor: COLOR_TRANSPARENT,
    borderColor: COLOR_TRANSPARENT,
    borderRadius: 4,
    borderWidth: 1,
    overflow: 'hidden',
  },

  itemTellsItem: {
    flexDirection: 'row',
    height: '100%',
  },

  itemTellsItemTextContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTellsItemText: {
    fontSize: 24,
    color: COLOR_WHITE,
  },

  itemTellsItemImageContainer: {
    flex: 1,
    padding: 2,
  },
  itemTellsItemImage: {
    flex: 1,
    resizeMode: 'contain',
  },

  // 305 Scanner View
  barcodeScannerPreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  // 306 WebBasic View
  webNavBar: {
    backgroundColor: COLOR_BLACK,
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    width: '100%',
    padding: 8,
  },

  webNavBarIcon: {
    paddingLeft: 32,
    paddingRight: 32,
  },
});

module.exports = css;
