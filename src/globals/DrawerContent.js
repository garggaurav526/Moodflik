import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AuthContext } from './Context'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

export default function DrawerContent(props) {
    const { signOut } = React.useContext(AuthContext)
    const [activeScreen, setActiveScreen] = React.useState("");
    const handleSignOut = () => {
        signOut();
    }

console.log("rouutee ",props.navigation.state)

    const handleScreen = (screen) => {
        props.navigation.navigate(screen, {
            refreshPage: {
                refresh: Math.random()
            },
        })
    }

    const screens = [
        { id: 1, name: 'ProfileSetting', label: 'Profile Setting', icon: 'person-circle', iconType: 'ionic' },
        { id: 2, name: 'NotificationSetting', label: 'Notification Setting', icon: 'ios-notifications', iconType: 'ionic' },
        { id: 3, name: 'PrivacySetting', label: 'Privacy Setting', icon: 'eye-off', iconType: 'ionic' },
        { id: 4, name: 'BlockUser', label: 'Block User', icon: 'block', iconType: 'material' },
        { id: 5, name: 'Invite', label: 'Invite', icon: 'person-add', iconType: 'ionic' },
        { id: 6, name: 'Help', label: 'Help', icon: 'help-circle-outline', iconType: 'ionic' },
        { id: 7, name: 'AboutUs', label: 'About Us', icon: 'chatbox', iconType: 'ionic' },
        { id: 8, name: 'ContactUs', label: 'Contact Us', icon: 'mail', iconType: 'ionic' },
        { id: 9, name: 'Cookies', label: 'Cookies', icon: 'ios-checkmark-done-circle', iconType: 'ionic' },
        { id: 10, name: 'TermsConditions', label: 'Terms & Conditions', icon: 'chatbox-ellipses', iconType: 'ionic' },
        { id: 11, name: 'Policy', label: 'Policy & Data Use', icon: 'information-circle', iconType: 'ionic' },
        { id: 12, name: 'CommunityGuidelines', label: 'Community Guidelines', icon: 'book', iconType: 'material' }
    ]

    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            {screens && screens.map((x, i) => {
                return <TouchableOpacity key={x.id} onPress={() => handleScreen(x.name)}>
                    <View style={{ flexDirection: 'row', padding: 10, marginHorizontal: 5 }}>
                        {x.iconType == 'material' ?
                            <MaterialIcons name={x.icon} style={{ textAlign: 'center', fontSize: RFPercentage(3), color: '#000' }} />
                            :
                            <Icon name={x.icon} style={{ textAlign: 'center', fontSize: RFPercentage(3), color: '#000' }} />
                        }
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 20 }}>
                            <Text style={{ color: '#000' }}>{x.label}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            })}
            <TouchableOpacity onPress={() => handleSignOut()}>
                <View style={{ flexDirection: 'row', padding: 10, marginHorizontal: 5 }}>
                    <Icon name={'lock-open-outline'} style={{ textAlign: 'center', fontSize: RFPercentage(3), color: '#000' }} />
                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={{ color: '#000' }}>Logout</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* <DrawerItem label="Logout" onPress={() => handleSignOut()} /> */}
        </DrawerContentScrollView>
    );
}

