import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground,Platform, TouchableOpacity, Image, Dimensions } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';
// import { HomeServices } from '../../Services/Home.services';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

// const homeServices = new HomeServices()
export default function BottomMenu({ navigation,action, activeScreen, cartItems }) {
    const [cartValue, setCartValue] = React.useState(0);
    useEffect(() => {
    }, []);

    const handleScreen = (screen) => {
        // action && action(false)
        navigation.navigate(screen,{
            refreshPage:{
                refresh : Math.random()
            },
        })
    }
    return (
        <View style={styles.bottoMenu}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => handleScreen("Home")}>
                    <View>
                        <Icon name={activeScreen == "Home"?'home':'home-outline'} style={{ width: '100%', textAlign: 'center', fontSize: RFPercentage(3), marginRight: 5, color: activeScreen == "Order" ? '#f04c4c' : '#fff' }} />
                        <Text style={{ color: activeScreen == "Order" ? '#f04c4c' : '#fff' }}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleScreen("Favourites")}>
                    <View>
                        <Icon name={activeScreen == "Favourites"?'heart':'heart-outline'} style={{ width: '100%', textAlign: 'center', fontSize: RFPercentage(3), marginRight: 5, color: activeScreen == "Order" ? '#f04c4c' : '#fff' }} />
                        <Text style={{ color: activeScreen == "Order" ? '#f04c4c' : '#fff' }}>Favourites</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleScreen("CreatePost")}>
                    <View>
                        <FeatherIcon name="plus" style={{ width: '100%', textAlign: 'center', fontSize: RFPercentage(3), marginRight: 5, color: activeScreen == "Order" ? '#f04c4c' : '#fff' }} />
                        <Text style={{ color: activeScreen == "Order" ? '#f04c4c' : '#fff' }}>Post</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleScreen("Notifications")}>
                    <View>
                        <Icon name={activeScreen == "Notifications"?'notifications':'notifications-outline'} style={{ width: '100%', textAlign: 'center', fontSize: RFPercentage(3), marginRight: 5, color: activeScreen == "Notifications" ? '#f04c4c' : '#fff' }} />
                        <Text style={{ color: activeScreen == "Notifications" ? '#f04c4c' : '#fff' }}>Notifications</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleScreen("Profile")}>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <View style={[styles.img,{height:Platform.OS === 'ios' ? 25 : 23,width:Platform.OS === 'ios' ? 25 : 23}]}>
                                <Image style={{ resizeMode: 'cover', width: '100%', height: '100%' }} source={require('../assets/default_profile.png')} />
                            </View>
                        </View>
                        <Text style={{ color: activeScreen == "Profile" ? '#f04c4c' : '#fff' }}>Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        // height: 23,
        // width: 23,
        borderWidth:1,
        borderColor:'#fff',
        padding:3,
        borderRadius:28/2,
        justifyContent: 'center',
        overflow:'hidden'
    },
    bottoMenu:{
        width:width,
        height:60,
        padding:10,
        color:'#fff',
        backgroundColor:'#6C0AC7'
    },
    notifyText:{
        backgroundColor:'#f04c4c',
        textAlign:'center',
        width:15,
        height:15,
        borderRadius:20/2,
        color:'#fff',
        fontSize:RFPercentage(1.5),
        position:'absolute',
        top:-5,
        right:-5
    }
})
