import {StyleSheet} from 'react-native';
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
    marginTop:30
  },
  dropList: {
    width: 350,
    marginTop: 20,
    backgroundColor: '#dddddd',    
  },
  dataTable: {
    width: '90%',
    marginTop:20
  },
  viewContainer:
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '30%',
  },
  appBar:{
    width:"100%", 
    backgroundColor:accentColor
  },
  profileBar:{
    height:100,
    width:"100%", 
    backgroundColor:accentColor
  },
  avatar:{
    marginLeft:20
  },
  statsCard:{
    height:100,
    width:'45%',
    marginTop:10,
    backgroundColor:'#E7E1DB'
  },
  cardRow:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  statCardTitle:{
    fontSize:15, 
    fontWeight:'100',

  },
  statCardValue:{
    fontSize:20,
    fontWeight:'900',
    
  },
  itemCardText:{
    fontSize:15,
    color:'#000',
    fontWeight:'400'
  },
  itemCard:{
    height:100,
    width:'90%',
    marginTop:10,
    backgroundColor:'#E7E1DB'
  },
  itemCardTitle:{
    fontSize:20,
    fontWeight:'600',
    color:'#000'
  }
});
