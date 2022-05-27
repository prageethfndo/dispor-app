import * as React from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

import type { Node } from 'react';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Listing from './components/NewListing.js';
import ItemDetails from './components/ItemDetails';
import SellerMode from './components/SellerMode';
import CollectorMode from './components/CollectorMode';
import Listings from './components/Listings';
import NewListing from './components/NewListing.js';
import Bidding from './components/Bidding.js';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  //set the global accent color for all components
  const accentColor = '#17AF82';

  //change
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' options={{title:"", headerShown:false}}>
          {props => <Login {...props} accentColor={accentColor} />}
        </Stack.Screen>

        <Stack.Screen name='Register' options={{title:"", headerShown:false}}>
          {props => <Register {...props} accentColor={accentColor} />}
        </Stack.Screen>

        <Stack.Screen name='SellerMode' options={{title:"", headerShown:false}}>
          {props => <SellerMode {...props} accentColor={accentColor} />}
        </Stack.Screen>


        <Stack.Screen name='CollectorMode' options={{title:"", headerShown:false}}>
          {props => <CollectorMode {...props} accentColor={accentColor} />}
        </Stack.Screen>

        <Stack.Screen name='NewListing' options={{title:"", headerShown:false}}>
          {props => <NewListing {...props} accentColor={accentColor} />}
        </Stack.Screen>

        <Stack.Screen name='Listings' options={{title:"", headerShown:false}}>
          {props => <Listings {...props} accentColor={accentColor} />}
        </Stack.Screen>

        <Stack.Screen name='Bidding' options={{title:"Bidding", headerShown:true , headerStyle:{
         backgroundColor:accentColor}, headerTitleStyle:{color:"#fff"}}}>
          {props => <Bidding {...props} accentColor={accentColor} />}
        </Stack.Screen>        

      </Stack.Navigator>
      {/** <SellerMode accentColor={accentColor} /> */}
    </NavigationContainer>
  );
};

export default App;
