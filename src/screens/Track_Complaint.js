import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar } from 'react-native'
import Timeline from 'react-native-timeline-flatlist'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export class Track_Complaint extends Component {

    constructor(props){
        super(props)
        this.data = [
          {time: '09:00', title: 'complaint closed', },
      {time: '10:45', title: 'complaint Processing', },
      {time: '12:00', title: 'complaint Received', description: '20/03/2020'},
        ]
      }
    render() {
        return (
          <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
  <Text style={styles.text_header}>Track Complaint</Text>
  </View>
  <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
  <View style={styles.footer}>
  <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={{marginVertical:20,borderRadius:20}}>
  <View style={{marginLeft:30,marginTop:10,marginVertical:5}}>
            <Text style={{fontSize:16,color:"white"}}>Ticket Number</Text>
          <Text style={{fontSize:16,color:'white'}}>COMPLAINT1022</Text>
          </View></LinearGradient>
  <Timeline
            circleSize={20}
            circleColor='rgb(45,156,219)'
            lineColor='#2fc2a4'
            descriptionStyle={{color:'black',}}
            timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          data={this.data}
         style={{marginVertical:40,marginHorizontal:30}}
        />
  </View>   
        </Animatable.View>
        </View>
        );
    }
}

export default Track_Complaint

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 4,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },

})
