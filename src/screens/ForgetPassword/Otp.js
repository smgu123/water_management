import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

 class Otp extends React.Component{
     constructor(props){
         super(props)
         this.state={
             pin1:"",
             pin2:"",
             pin3:"",
             pin4:""
         }
     }

    componentDidMount=()=>{
        this.refs.pin1ref.focus()
    }


render(){

    const{pin1,pin2,pin3,pin4} = this.state

  return(
<View style={styles.container}>
<StatusBar backgroundColor='#009387' barStyle="light-content"/>

<View style={styles.header}>
  <Text style={styles.text_header}> Enter OTP !</Text>
  </View>
  <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
  <View style={styles.footer}>
      <Text style={{fontSize:20,color:"#009387",marginVertical:30}}>Enter 4 digit otp !</Text>
<View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
    <TextInput
    onChangeText={(pin1)=>{this.setState({pin1:pin1})
    if(pin1!=""){
    this.refs.pin2ref.focus()
}
}}
    value={pin1}
    ref={"pin1ref"}
    maxLength={1}
    style={styles.otptext}/>
 
 <TextInput
     onChangeText={(pin2)=>{this.setState({pin2:pin2})
     if(pin2!=""){
        this.refs.pin3ref.focus()
    }
}}
     value={pin2}
    ref={"pin2ref"}
    maxLength={1}
    style={styles.otptext}/>
 
 <TextInput
    onChangeText={(pin3)=>{this.setState({pin3:pin3})
    if(pin3!=""){
        this.refs.pin4ref.focus()
    }
}}
    value={pin3}
    ref={"pin3ref"}
    maxLength={1}
    style={styles.otptext}/>
 
 <TextInput
 onChangeText={(pin4)=>{this.setState({pin4:pin4})
 if(pin4!=""){
    alert("otp entered")
}}}
 value={pin4}
    ref={"pin4ref"}
    maxLength={1}
    style={styles.otptext}/>
</View>

<TouchableOpacity onPress={() => this.props.navigation.navigate('Forget_Password')}>
                <Text style={{color: '#009387', marginTop:15,fontSize:17}}>Resend Otp?</Text>
            </TouchableOpacity>

<View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => this.props.navigation.navigate("Reset_Password")}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Submit</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
      </View>
      </Animatable.View>
      </View>
  
 );
}
}

export default Otp;

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
  otptext:{
    backgroundColor:"#f5f4f2",
    fontWeight:"600",
    alignSelf:'center',
    // padding:10,
    fontSize:20,
    height:55,
    width:"15%",
    borderRadius:10,
    borderWidth:1,
    borderColor:'grey',
    textAlign:'center'
  },
//   action: {
//       flexDirection: 'row',
//       marginTop: 10,
//       borderBottomWidth: 1,
//       borderBottomColor: '#f2f2f2',
//       paddingBottom: 5
//   },
//   actionError: {
//       flexDirection: 'row',
//       marginTop: 10,
//       borderBottomWidth: 1,
//       borderBottomColor: '#FF0000',
//       paddingBottom: 5
//   },
//   textInput: {
//       flex: 1,
//       marginTop: Platform.OS === 'ios' ? 0 : -12,
//       paddingLeft: 10,
//       color: '#05375a',
//   },
//   errorMsg: {
//       color: '#FF0000',
//       fontSize: 14,
//   },
//   ImageIconStyle: {
//     // padding: 10,
//     margin: 10,
//     height: 30,
//     width: 30,
//     alignSelf:'center',
//   },
 
  button: {
      alignItems: 'center',
      marginTop: -20
  },
  signIn: {
      marginVertical:70,
      width: '80%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
     
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold',
  }
});
