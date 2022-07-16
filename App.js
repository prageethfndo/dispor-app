import * as React from 'react';
import { AppRegistry,ToastAndroid } from 'react-native';

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
import { useState } from 'react';
import Toast from './components/Toast';
import Bids from './components/Bids';





const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  const showToast = (text) => {
    ToastAndroid.show( text , ToastAndroid.SHORT);
};
  //set the global accent color for all components
  const accentColor = '#17AF82';

  const [isUpdate, setIsUpdate] = useState(false)
  //change
  return (
    <><NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Login' options={{ title: "", headerShown: false }}>
          {props => <Login {...props} accentColor={accentColor} showToast={showToast}/>}
        </Stack.Screen>

        <Stack.Screen name='Register' options={{ title: "", headerShown: false }}>
          {props => <Register {...props} accentColor={accentColor} />}
        </Stack.Screen>

        <Stack.Screen name='SellerMode' options={{ title: "", headerShown: false }}>
          {props => <SellerMode {...props} accentColor={accentColor} isUpdate={isUpdate} setIsUpdate={setIsUpdate} showToast={showToast}/>}
        </Stack.Screen>


        <Stack.Screen name='CollectorMode' options={{ title: "", headerShown: false }}>
          {props => <CollectorMode {...props} accentColor={accentColor}  isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>}
        </Stack.Screen>

        <Stack.Screen name='NewListing' options={{
          title: "Listing", headerShown: true, headerStyle: {
            backgroundColor: accentColor
          }, headerTitleStyle: { color: "#fff" },
          headerTintColor: "#fff", headerShadowVisible: false
        }}>
          {props => <NewListing {...props} accentColor={accentColor} showToast={showToast} setIsUpdate={setIsUpdate}/>}
        </Stack.Screen>

        <Stack.Screen name='Listings' options={{
          title: "All Items", headerShown: true, headerStyle: {
            backgroundColor: accentColor
          }, headerTitleStyle: { color: "#fff" },
          headerTintColor: "#fff", headerShadowVisible: false
        }}>
          {props => <Listings {...props} accentColor={accentColor} />}
        </Stack.Screen>

        <Stack.Screen name='Bidding' options={{
          title: "Bidding", headerShown: true, headerStyle: {
            backgroundColor: accentColor
          }, headerTitleStyle: { color: "#fff" },
          headerTintColor: '#fff', headerShadowVisible: false
        }}>
          {props => <Bidding {...props} accentColor={accentColor} showToast={showToast} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>}
        </Stack.Screen>

        <Stack.Screen name='Bids' options={{
          title: "View Bids", headerShown: true, headerStyle: {
            backgroundColor: accentColor
          }, headerTitleStyle: { color: "#fff" },
          headerTintColor: '#fff', headerShadowVisible: false
        }}>
          {props => <Bids {...props} accentColor={accentColor} showToast={showToast} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>}
        </Stack.Screen>

      </Stack.Navigator>
      {/** <SellerMode accentColor={accentColor} /> */}
     
    </NavigationContainer>
   
    </>

  );
};

export default App;
