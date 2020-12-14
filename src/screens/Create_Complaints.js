import React,{useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';
import {Picker} from '@react-native-picker/picker';
import Dialog, { DialogContent, SlideAnimation} from 'react-native-popup-dialog';
import { Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export class Create_Complaints extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countries: [],
            singleFile:"",
            Complaint_type:"",
            visible:false,
            
        }
    }

    selectOneFile = async () => {
        //Opening Document Picker for selection of one file
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
          });
          console.log('res : ' + JSON.stringify(res));
          console.log('File Name : ' + res.name);

          //Setting the state to show single file attributes
          this.setState({ singleFile: res });
        } catch (err) {
          //Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            //If user canceled the document selection
            alert('Canceled from single doc picker');
          } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };

    render() {

        return (
            <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>CREATE COMPLAINT</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}></Text>
            <ScrollView>
            <Text style={[styles.text_footer, {
                color: 'black'
            }]}>Customer ID</Text>
            <TextInput style={styles.text} 
            placeholder="cust201"
            placeholderTextColor="black"
            ></TextInput>
             
             <Text style={[styles.text_footer, {
                color: 'black'
            }]}>Contact number</Text>
             <TextInput style={styles.text} 
            placeholder="phone number"
            placeholderTextColor="#28b0a0"
            keyboardType="phone-pad"></TextInput>

<View>
 <Text style={[styles.text_footer, {
                color: 'black'
            }]}>Complaint Type</Text>
<Picker
  selectedValue={this.state.Complaint_type}
  style={{height: 50, width: "100%",borderWidth:1}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({Complaint_type: itemValue})
  }>
  <Picker.Item label="customer Relation"  />
  <Picker.Item label="Operation & Maintaince" />
  <Picker.Item label="Finance"  />
  <Picker.Item label="Technical" />
</Picker>
</View>

<View>
<Text style={[styles.text_footer, {
                color: 'black'
            }]}>Complaint Message</Text>
            <TextInput
  style={[styles.textArea,styles.text]}
      underlineColorAndroid="transparent"
      placeholder="Type something"
      placeholderTextColor="#28b0a0"
      numberOfLines={5}
      multiline={true}
    />
    </View>
    
<View>
<TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={this.selectOneFile}>
          {/*Single file selection button*/}
          <Text style={{marginRight: 10, fontSize: 17,color:"#28b0a0"}}>
          Attachments
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        {/*Showing the data of selected Single file*/}
        <Text style={styles.textStyle}>
          File Name: {this.state.singleFile.name ? this.state.singleFile.name : ''}
          {'\n'}
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 2,
            margin: 10
          }} />
          </View>

          <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => this.setState({ visible: true })}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Raise Complaint</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>

                <Dialog
    visible={this.state.visible}
    
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <DialogContent>
     
      <Text style={{fontSize:20,color:"black",padding:25}}>Are you sure you want to create complaint ?</Text>
      <View style={{flexDirection:"row",justifyContent:'space-around',alignSelf:'center'}}>
      <TouchableOpacity onPress={()=>alert("complaint registered successfully")}>
<Icon name="checkmark-outline" size={50} color="#20ab98"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.setState({ visible: false })}>
<Icon name="close-outline" size={50} color="#20ab98"/>
      </TouchableOpacity>
      </View>
    </DialogContent>
  </Dialog>

        </ScrollView>
        </View>
        </View>
        )
    }
}

export default Create_Complaints

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
        flex: 8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        marginLeft:15,
        marginRight:15,
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
    text:{
        borderRadius:20,
        borderWidth:1,
        marginVertical:10,
        padding:10
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start",
        borderColor:"black",
        borderWidth:1,
        borderRadius:15
      },
      buttonStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 8,
        borderColor:'black',
        borderWidth:1,
        marginVertical:10,
        borderRadius:20
      },
      imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
      },
      textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        color: 'black',
      },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    ImageIconStyle: {
      // padding: 10,
      margin: 10,
      height: 30,
      width: 30,
      alignSelf:'center',
    },
   
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        marginVertical:10,
        width: '100%',
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

