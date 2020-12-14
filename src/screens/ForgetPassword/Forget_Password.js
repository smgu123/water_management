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
import axios from 'react-native-axios';

const Forget_Password = ({navigation}) => {
  
  const [data, setData] = React.useState({
    email: '',
    
});

const textInputChange = (val) => {
  if( val.length !== 0 ) {
      setData({
          ...data,
          username: val,
          check_textInputChange: true
      });
  } else {
      setData({
          ...data,
          username: val,
          check_textInputChange: false
      });
  }
}

// const handleforgetPassword = async ()=>{
        
//     let email = email
//     const response = await axios.post('https://5e23dcbcc5fc8f001465cd4f.mockapi.io/forgetPassword', {
//       "email":email
//     })
//     if(response.data.message == "success"){
//         alert("otp sent to your registered email")
//         navigation.navigate('Otp')
//     }
// }

  return(
<View style={styles.container}>
<StatusBar backgroundColor='#009387' barStyle="light-content"/>

<View style={styles.header}>
  <Text style={styles.text_header}> Forget Password ?</Text>
  </View>
  <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
  <View style={styles.footer}>
  
  <Text style={[styles.text_footer, {
                marginTop: 30
            }]}>Email</Text>
            <View style={styles.action}>
                <Icon 
                    name="mail"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={() =>  navigation.navigate('Otp')}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>CONFIRM</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop:-50
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>CANCEL</Text>
                </TouchableOpacity>
  </View></Animatable.View>
</View>

  );
}

export default Forget_Password;

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
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },

  signIn: {
      marginVertical:70,
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,  
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical:20
  }
});
