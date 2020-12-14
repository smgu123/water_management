import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet,Animated,TouchableOpacity} from 'react-native';
import { Card, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';



export default class View_Complaints extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        isLoading: true,

      };
    }


    componentDidMount() {
      fetch('https://5e23dcbcc5fc8f001465cd4f.mockapi.io/Complaint')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }

    
    render() {
      const { data, isLoading } = this.state;
    
      return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                  <LinearGradient
                  colors={['#bd13ba','#32a8a8']}
                  style={{marginVertical:20,borderRadius:20}}>
                
                 <View style={[styles.Bills],{marginLeft:30,marginTop:20,marginVertical:5,borderBottomWidth:1,borderColor:"white",width:"80%",marginLeft:30}}>
            <Text style={{fontSize:16,color:"white",flex:1}}>Ticket Number</Text>
          <Text style={{fontSize:16,color:'white',flex:1}}>{item.TicketNumber}</Text>
          </View>
          <View style={{marginLeft:30,marginTop:20,marginVertical:5}}>
            <Text style={{fontSize:16,color:"white",flex:1}}>Complaint Type</Text>
          <Text style={{fontSize:16,color:'white'}}>{item.ComplaintType}</Text>
          </View>
          <View style={{alignItems:"flex-end",justifyContent:"flex-end",marginRight:30,marginTop:-40,
        borderBottomWidth:1,borderColor:"white",width:"80%",marginLeft:30,marginVertical:10}}>
          <Text style={{fontSize:16,color:"white",flex:1}}>Received Date</Text>
        <Text style={{fontSize:16,color:'white'}}>{item.ReceivedDate}</Text>
        </View>

        <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>{this.props.navigation.navigate('Track_Complaint')}}
                >
                <LinearGradient
                    colors={['#dfa9eb', '#cc1644']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Track Complaint</Text>
                </LinearGradient>
              
                </TouchableOpacity>

               

          </LinearGradient>
              )}
            />

          )}
         
        </View>
        
      );
    }
  };

  const styles = StyleSheet.create({

    Bills:{
      flex:1,
      flexDirection:'row',
      padding:8,
      marginRight:30,
      marginLeft:20
    },
    cover: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    // sheet: {
    //   position: "absolute",
    //   top: Dimensions.get("window").height,
    //   left: 0,
    //   right: 0,
    //   height: "100%",
    //   justifyContent: "flex-end",
    // },
    popup: {
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      minHeight: 80,
      alignItems: "center",
      justifyContent: "center",
    },
    signIn: {
        width: '80%',
        height: 50,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical:20
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    })