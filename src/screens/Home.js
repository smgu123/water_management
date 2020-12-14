import React,{useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    FlatList
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import {Card} from 'react-native-paper';


//   const Item = ({ title }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state={
            data1: [],
            data2:[],
            isLoading: true,
        }
    }

    componentDidMount() {
    
        fetch('https://5fbdfbec5923c90016e6a521.mockapi.io/compliantStatus')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data1: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });

          fetch('https://5fbdfbec5923c90016e6a521.mockapi.io/billStatus')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data2: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }
    
    render() {
        return (
            <>
            <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        {/* <View style={styles.header}>
            <Text style={{fontSize:25,color:"white"}}>Dashboard</Text>
        </View> */}
        <View style={styles.footer}>
<View style={{flex:1,padding:5}}>
      <FlatList
        data={this.state.data1}
        renderItem={({item})=>
        <LinearGradient
        colors={['#bd13ba','#32a8a8']}
        style={{marginVertical:10,borderRadius:20,padding:10}}>
            {/* <Card style={{backgroundColor:"#6ddec3",margin:5,borderRadius:20}}> */}
                <Text style={{alignSelf:'center',fontSize:20,color:"white"}}>Complaint Status</Text>
                <View style={{flex:1,flexDirection:'row',padding:10,marginVertical:10}}>
                    <Text style={{flex:1,fontSize:18,color:"white"}}>Active Complaint</Text>
                     <Text style={{flex:1,fontSize:18,marginHorizontal:20,color:"white"}}>{item.ActiveComplaint}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',padding:10,marginVertical:18}}>
                    <Text style={{flex:1,fontSize:18,color:"white"}}> Complaint status</Text>
                     <Text style={{flex:1,fontSize:18,marginHorizontal:20,color:"white"}}>{item.Complaintstatus}</Text>
                </View>
            {/* </Card> */}
            </LinearGradient>
    }
        keyExtractor={item => item.id}
      />
</View>
<View style={{flex:1,padding:5}}>
      <FlatList
        data={this.state.data2}
        renderItem={({item})=>
        <LinearGradient
        colors={['#c79e16', '#bd1142']}
        style={{marginVertical:10,borderRadius:20,padding:10}}>
            {/* <Card style={{backgroundColor:"#6ddec3",margin:5,borderRadius:20}}> */}
                 <Text style={{alignSelf:'center',fontSize:20,color:"white"}}>Bill Status</Text>
                <View style={{flex:1,flexDirection:'row',padding:10,marginVertical:10}}>
                    <Text style={{flex:1,fontSize:18,color:"white"}}>current Bill Status</Text>
                     <Text style={{flex:1,fontSize:18,marginLeft:80,color:"white"}}>{item.CurrentBillStatus}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',padding:10,marginVertical:18}}>
                    <Text style={{flex:1,fontSize:18,color:"white"}}> Pending Date</Text>
                     <Text style={{flex:1,fontSize:18,marginHorizontal:20,color:"white"}}>{item.PendingDate}</Text>
                </View>
            {/* </Card> */}
            </LinearGradient>
    }
        keyExtractor={item => item.id}
      />
</View>
        </View>
        </View>
        </>
        )
    }
}   

export default Home;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },

  footer: {
      flex: 5,
      backgroundColor: '#fff',
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});