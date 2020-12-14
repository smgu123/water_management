import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet,Animated,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import RNFetchBlob from 'react-native-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';

const dirs = RNFetchBlob.fs.dirs;
const android = RNFetchBlob.android;

export default class View_Bills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      path1:null,
    };
  }

  async handleDownload(){
    RNFetchBlob.config({
      addAndroidDownloads: {
        title: 'Bills',
        useDownloadManager: true,
        mediaScannable: true,
        notification: true,
        description: 'File downloaded by download manager.',
        path: `${dirs.DownloadDir}/temporaryfile6.pdf`,
      },
    })
      .fetch('GET', 'https://templates.invoicehome.com/invoice-template-us-mono-black-750px.png')
      .then((res) => {
        console.log("success")
        // android.actionViewIntent(res.path())
      })
      .catch((err) => console.log(err));
  };
  

 componentDidMount() {
    
    fetch('https://5e23dcbcc5fc8f001465cd4f.mockapi.io/ViewBills')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render(){
    const { data, isLoading } = this.state;
   

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList

          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item, index}) => (

            <LinearGradient
            colors={['#c79e16', '#bd1142']}
            style={{marginVertical:10,borderRadius:20,padding:10}}>

            <View style={[styles.Bills],{borderBottomWidth:1,borderColor:"white",width:"80%",marginLeft:30,marginTop:10,
           }}>
              <Text style={{fontSize:16,color:"white",flex:1}}>Bill Number</Text>
            <Text style={{fontSize:16,color:'white'}}>{item.BillNumber}</Text>
            <TouchableOpacity onPress={this.handleDownload} style={{justifyContent:"flex-end",alignItems:'flex-end',marginTop:-30,marginVertical:5}}
            key={index.toString()} 

          >
            <Icon name="download-outline" size={35}/>
          </TouchableOpacity>
            </View>
          <View style={{marginLeft:30,marginTop:20,marginVertical:5}}>
            <Text style={{fontSize:18,color:"white",flex:1}}>Bill Amount</Text>
          <Text style={{fontSize:18,color:'white'}}>{item.BillAmount}</Text>
          </View>
          <View style={{alignItems:"flex-end",justifyContent:"flex-end",marginRight:30,marginTop:-40,
        borderBottomWidth:1,borderColor:"white",width:"80%",marginLeft:30,marginVertical:10}}>
          <Text style={{fontSize:16,color:"white",flex:1}}>Amount Paid</Text>
        <Text style={{fontSize:16,color:'white'}}>{item.AmountPaid}</Text>
        </View>
        <View style={{marginLeft:30,marginTop:10}}>
            <Text style={{fontSize:16,color:"white",flex:1}}>Bill Status</Text>
          <Text style={{fontSize:16,color:'white'}}>{item.BillStatus}</Text>
          </View>
          <View style={{alignItems:"flex-end",justifyContent:"flex-end",marginRight:30,marginTop:-40}}>
          <Text style={{fontSize:16,color:"white",flex:1}}>Billing Month</Text>
        <Text style={{fontSize:16,color:'white'}}>{item.BillingMonth}</Text>
        </View>
       </LinearGradient>
          )}
        />
      )}
    </View>
  );
};
}

const styles = StyleSheet.create({

Bills:{
  flex:1,
  flexDirection:'column',
  padding:8,
  marginRight:30,
  marginLeft:20
}
})