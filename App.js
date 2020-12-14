
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import { NavigationContainer, StackActions,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/Drawer_nav/DrawerContent';
import Login from './src/screens/Login';
import Sign_up from './src/screens/Sign_up';
import Forget_Password from './src/screens/ForgetPassword/Forget_Password';
import Otp from './src/screens/ForgetPassword/Otp';
import Reset_Password from './src/screens/ForgetPassword/Reset_Password';
import Home from './src/screens/Home';
import Create_Complaints from './src/screens/Create_Complaints';
import Feather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
import View_Bills from './src/screens/View_Bills';
import View_Complaints from './src/screens/View_Complaints';
import Track_Complaint from './src/screens/Track_Complaint';
import Profile from './src/screens/Profile';

const SplashScreenStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const View_BillsStack = createStackNavigator();
const View_ComplaintsStack = createStackNavigator();
const Track_ComplaintStack = createStackNavigator();

const screenOptionStyle = {
  headerStyle : {backgroundColor:"#009387",
  height: 80,
  },
  // headerShown : false,
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize:25,   
  }
  
};
console.disableYellowBox = true;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={screenOptionStyle}>
    <HomeStack.Screen name="Notes" component={Home} 
    options={{title:'Dashboard',headerLeft:() => (
      <Icons.Button name="ios-menu" size={35} backgroundColor="#009387" 
      onPress={() => navigation.openDrawer()}></Icons.Button>)}}
      />
  </HomeStack.Navigator>
);

const View_BillsStackScreen = ({navigation}) => (
  <View_BillsStack.Navigator screenOptions={screenOptionStyle}>
    <View_BillsStack.Screen name="View Bills" component={View_Bills} 
    options={{headerLeft:() => (
      <Icons.Button name="chevron-back-outline" size={30} backgroundColor="#009387" 
      onPress={() => navigation.navigate("Home")}></Icons.Button>)}}
      />
  </View_BillsStack.Navigator>
)

const View_ComplaintsStackScreen = ({navigation}) => (
  <View_ComplaintsStack.Navigator screenOptions={screenOptionStyle}>
    <View_ComplaintsStack.Screen name="View Complaints" component={View_Complaints} 
    options={{headerLeft:() => (
      <Icons.Button name="chevron-back-outline" size={30} backgroundColor="#009387" 
      onPress={() => navigation.navigate("Home")}></Icons.Button>)}}
      />
  </View_ComplaintsStack.Navigator>
)

// const Track_ComplaintStackScreen = ({navigation}) => (
//   <Track_ComplaintStack.Navigator screenOptions={screenOptionStyle}>
//     <Track_ComplaintStack.Screen name="Track_Complaint" component={Track_Complaint} 
//     options={{headerLeft:() => (
//       <Icons.Button name="chevron-back-outline" size={30} backgroundColor="#009387" 
//       onPress={() => navigation.navigate("Home")}></Icons.Button>)}}
//       />
//   </Track_ComplaintStack.Navigator>
// )


// const SplashScreenStackScreen = ({navigation}) => (
//   <SplashScreenStack.Navigator >
//     <SplashScreenStack.Screen name="Notes" component={SplashScreen}/>
//   </SplashScreenStack.Navigator>
// );

// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator >
//     <HomeStack.Screen name="Notes" component={Home}/>
//   </HomeStack.Navigator>
// );

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="SplashScreen" component={SplashScreen} options={{gestureEnabled: false}} />
      <Drawer.Screen name="Login" component={Login} screenOptions={{gestureEnabled: false}} options={{headerShown:false}}/>
      <Drawer.Screen name="Sign_up" component={Sign_up} options={{gestureEnabled: false}} options={{headerShown:false}}/>
      <Drawer.Screen name="Home" component={HomeStackScreen}/>
      <Drawer.Screen name="Forget_Password" component={Forget_Password} options={{headerShown:false}}/>
    <Drawer.Screen name="Otp" component={Otp} options={{headerShown:false}} />
    <Drawer.Screen name="Reset_Password" component={Reset_Password} /> 
    <Drawer.Screen name="Profile" component={Profile} /> 
    <Drawer.Screen name="Create_Complaints" component={Create_Complaints} /> 
    <Drawer.Screen name="View_Bills" component={View_BillsStackScreen} /> 
    <Drawer.Screen name="View_Complaints" component={View_ComplaintsStackScreen} /> 
    <Drawer.Screen name="Track_Complaint" component={Track_Complaint} options={{headerShown:false}}  /> 
  </Drawer.Navigator>
  </NavigationContainer>
  );
}
export default App;
