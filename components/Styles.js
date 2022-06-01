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
    borderRadius:30,
    shadowColor:'transparent'
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
    width: "90%",
    marginTop: 20,
    backgroundColor: '#dddddd',
    marginLeft:"5%",
    marginRight:"5%"
    
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
    
    height: 100,
    width: "100%",
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  profileText: {
    color: '#fff',
    fontSize: 25,
    fontWeight:'600'
  },
  profileUsername: {
    fontSize: 15,
    paddingLeft:5,
    color:'#fff'
  },
  avatar: {
    marginLeft: 20,
    backgroundColor:"#fff",
    marginRight:10
  },
  statsCard: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '45%',
    flexDirection: 'column',
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#fff',
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
    color: '#4a4a4a'

  },
  statCardUnit: {
    color: '#4a4a4a',
    fontSize: 15,

  },
  statCardValue: {
    fontSize: 20,
    fontWeight: '100',
    color: '#17AF82',
    fontSize: 30,


  },
  itemCardText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400'
  },
  itemCard: {

    width: '90%',
    marginTop: 2,
    marginBottom:2,
    padding: 7,
    backgroundColor: '#ededed',
    borderRadius:15,
    shadowColor:'transparent'
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
  },
  
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    newBtn:{
      borderRadius:20,
      shadowColor:'transparent'
    },

    bidBtn: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: '90%',
      marginTop: 15,
      borderRadius:30,
      shadowColor:'transparent'
      
    },
    TabBar:{
      display: 'flex', 
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:'row',
      backgroundColor: accentColor,
      width: '100%', 
      height: "7%",
      
    }
});
