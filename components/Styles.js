import { StyleSheet } from 'react-native';
const accentColor = '#038a37';
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
    height: 100,
    width: "100%",
    backgroundColor: accentColor
  },
  avatar: {
    marginLeft: 20
  },
  statsCard: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '45%',
    flexDirection:'column',
    marginTop: 10,
    backgroundColor: accentColor
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  statCardTitle: {
    fontSize: 15,
    fontWeight: '100',
    color: '#fff'

  },
  statCardUnit:{
    color:'yellow',
    fontSize:10,
    
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
    padding: 5,
    backgroundColor: '#E7E1DB'
  },
  itemCardTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    marginBottom: 5
  },
  itemCardPrice: {
    fontSize: 22,
    fontWeight: '600',
    color: accentColor
  },
  itemCardWeight: {
    fontWeight: '900',
    fontSize: 20
  }
});
