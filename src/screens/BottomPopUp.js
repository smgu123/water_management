// import React, { Component } from 'react'
// import { Text, View,Modal, Dimensions} from 'react-native'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
// const deviceHeight = Dimensions.get("window").height
// export class BottomPopUp extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             show:false,
//         }
//     }
//     show=()=>{
//         this.setState({show:true})
//       }
  
//       close=()=>{
//         this.setState({show:false})
//       }

//       renderOutsideTouchable(onTouch){
//           const view = <View style={{flex:1,width:'100%'}}/>
//           if(!onTouch) return view

//           return(
//               <TouchableWithoutFeedback onPress={onTouch} style={{flex:1,width:'100%'}}>
//                   {view}
//               </TouchableWithoutFeedback>
//           )
//       }
//     render() {
//         const {show} = this.state;
//         const {onTouchOutside}=this.props

//         return (
//             <View>
//               <Modal
//             animationType={'fade'}
//             transparent={true}
//             visible={show}
//             onRequestClose={this.close}
//                 >
//                     <View style={{flex:1,
//                         backgroundColor:'#000000AA',
//                         justifyContent:'flex-end'}}>
//                             {this.renderOutsideTouchable(onTouchOutside)}
//                             <View style={{
//                                 backgroundColor:'#FFFFFF',
//                                 width:"100%",
//                                 borderTopRightRadius:10,
//                                 borderTopLeftRadius:10,
//                                 paddingHorizontal:10, 
//                                 maxHeight:deviceHeight * 0.4
                                
//                             }}
//                             >
//                                 <View>
//                                     <Text>

//                                     </Text>
//                                 </View>
//                             </View>
//                         </View>
//                 </Modal>
//             </View>
//         )
//     }
// }

// export default BottomPopUp
