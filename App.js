import * as React from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import type {Node} from 'react';
import Register from './components/Register.js';
import Login from './components/Login.js';

const App: () => Node = () => {
  return <Login />;
};

export default App;
