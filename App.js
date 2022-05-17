import * as React from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import type {Node} from 'react';
import Register from './components/Register.js';
import Login from './components/Login.js';

const App: () => Node = () => {
  //set the global accent color for all components 
  const accentColor = '#038a37'

  return <Login accentColor={accentColor}/>;
};

export default App;
