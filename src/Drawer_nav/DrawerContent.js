import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
    return(
        <View style ={{flex:1}}>
            
            <DrawerContentScrollView {...props}>
            
                <View style={styles.drawerContent}>
                    <ImageBackground source = {{uri:"https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} style={{width:"100%"}} imageStyle = {{opacity:0.8}}>
                <Drawer.Section style={styles.drawerSection} >
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://images.mediabakery.com/WST/GMN/WST1038504-preview-logo-watermarked.jpg'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Your profile </Title>
                               
                            </View>
                            </View> 
                        </View>
                    
                        </Drawer.Section>
                        </ImageBackground>
                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="document-text" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="View Bills"
                            onPress={() => {props.navigation.navigate('View_Bills')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="create" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Create Complaints"
                            onPress={() => {props.navigation.navigate('Create_Complaints')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="eye" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="View Complaints"
                            onPress={() => {props.navigation.navigate('View_Complaints')}}
                        />
                        
                       
                    </Drawer.Section>
                    
            </View>
            </DrawerContentScrollView>
            
            <Drawer.Section style={styles.bottomDrawerSection}>
<DrawerItem 
    icon={({color, size}) => (
        <Icon 
        name="person" 
        color={color}
        size={size}
        />
    )}
    label="MyAccount"
    onPress={() => {props.navigation.navigate('Profile')}}
/>

<DrawerItem 
    icon={({color, size}) => (
        <Icons 
        name="exit-to-app" 
        color={color}
        size={size}
        />
    )}
    label="Sign Out"
    onPress={() => props.navigation.navigate('Login')}
/>
</Drawer.Section>
</View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      padding: 15,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: "black"
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    drawerSection: {
        marginTop: 15,
      },
})
