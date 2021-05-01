import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BottomMenu from '../components/BottomMenu'
const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Notifications(props) {
    return (<>
        <ScrollView>
            <Text style={{textAlign:'center',fontSize:RFPercentage(4),fontWeight:'bold',marginTop:20}}>Notification</Text>
        </ScrollView>
        <BottomMenu
            navigation={props.navigation}
        />
        </>
    )
}

const styles = StyleSheet.create({})
