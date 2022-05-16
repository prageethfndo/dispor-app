import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import logo from './assests/img/logo.png';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={logo} style={styles.logo} />

        {/*textinputs*/}
        <TextInput
          style={styles.textBox}
          label="Name"
          placeholder="Enter Your Name"
        />
        <TextInput
          style={styles.textBox}
          label="Email"
          placeholder="Enter Your Email"
        />
        <TextInput
          style={styles.textBox}
          label="Address"
          placeholder="Enter Your Address"
        />
        <TextInput
          style={styles.textBox}
          label="Contact"
          placeholder="Enter Your Contact Number"
        />
        <TextInput
          style={styles.textBox}
          label="Password"
          placeholder="Enter Password"
        />
        <TextInput
          style={styles.textBox}
          label="Confirm Password"
          placeholder="Enter Password Again"
        />
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.regBtn}>
          Register
        </Button>

        <Text style={styles.loginText}>Already a member <Button
          mode="text"
          onPress={() => console.log('Pressed')}>
          Login
        </Button></Text>

        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    //styles for logo here
    margin: 40,
  },
  textBox: {
    height: 60,
    width: '90%',
    marginTop: 15,
  },
  regBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    width: '90%',
    marginTop: 15,
  },
  loginText:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',    
    height:50,
  }
});

export default App;
