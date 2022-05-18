import { transform } from '@babel/core';
import { StyleSheet } from 'react-native';
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
const accentColor = '#17AF82';
//keep all global style here
export default StyleSheet.create({

  logo: {
    //styles for logo here
    //#038a37 - accent color 

    margin: 25,
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
    height: 50,
    width: '90%',
    marginTop: 15,
  },
  loginText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  link: {
    color: '#038a37',
  },
  textHeading: {
    fontSize: 25,
    margin: 10,
    marginTop: 30
  },
  dropList: {
    width: 350,
    marginTop: 20,
    backgroundColor: '#dddddd',
  },
  dataTable: {
    width: '90%',
    marginTop: 20
  },
  viewContainer:
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '30%',
  },
  appBar: {
    width: "100%",
    backgroundColor: accentColor
  },
  profileBar: {
    marginTop:15,
    height: 100,
    width: "100%",
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  profileText: {
    color: 'black',
    fontSize: 25,
  },
  profileUsername: {
    fontSize: 15,
    paddingLeft:5
  },
  avatar: {
    marginLeft: 20,
    backgroundColor:accentColor,
    marginRight:10
  },
  statsCard: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '45%',
    flexDirection: 'column',
    marginTop: 20,
    margin: 5,
    backgroundColor: accentColor,
    borderRadius: 15
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  statCardTitle: {
    fontSize: 15,
    fontWeight: '100',
    color: '#fff'

  },
  statCardUnit: {
    color: 'yellow',
    fontSize: 15,

  },
  statCardValue: {
    fontSize: 20,
    fontWeight: '100',
    color: 'yellow',
    fontSize: 30,


  },
  itemCardText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400'
  },
  itemCard: {

    width: '90%',
    marginTop: 10,
    padding: 7,
    backgroundColor: '#E7E1DB'
  },
  itemCardTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    marginBottom: 5
  },
  itemCardPrice: {
    fontSize: 25,
    fontWeight: '600',
    color: accentColor
  },
  itemCardWeight: {
    fontWeight: '900',
    fontSize: 20
  }
});
