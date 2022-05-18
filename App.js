import * as React from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import type {Node} from 'react';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Listing from './components/NewListing.js';
import ItemDetails from './components/ItemDetails';
import SellerMode from './components/SellerMode';

const App: () => Node = () => {
  //set the global accent color for all components
  const accentColor = '#17AF82';

  //change
  return <SellerMode accentColor={accentColor} />;
};

export default App;
